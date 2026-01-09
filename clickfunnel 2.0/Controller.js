const axios = require("axios");

/**
 * Get user tags by email
 * Following ClickFunnels 2.0 API documentation: https://developers.myclickfunnels.com/
 * 
 * Steps:
 * 1. Get contact_id using GET /workspaces/{workspace_id}/contacts with email_address filter
 * 2. Use /contacts/{contact_id}/tags endpoint to get tags
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getUserTags = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ error: "Email parameter is required" });
    }

    // ClickFunnels 2.0 API configuration
    const workspaceId = '337689';
    const workspaceSlug = 'ericniceberg';
    const apiToken = 'J7t6KgXFzx5ihGr13lh1u3DV8_kFTmCdgtUeyJcN3dc';

    if (!apiToken) {
      return res.status(500).json({ 
        error: "ClickFunnels API token is not configured. Please set CLICKFUNNELS_API_TOKEN in your environment variables." 
      });
    }

    // Construct base URL: https://{subdomain}.myclickfunnels.com/api/v2/workspaces/{workspace_id}
    const baseUrl = `https://${workspaceSlug}.myclickfunnels.com/api/v2/workspaces/${workspaceId}`;

    // Step 1: Get contact_id using GET /contacts endpoint with email_address filter
    const contactsResponse = await axios.get(
      `${baseUrl}/contacts`,
      {
        params: {
          'filter[email_address]': email
        },
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    // Extract contacts from response
    // The API returns an array directly, or it might be nested in data property
    const contacts = Array.isArray(contactsResponse.data) 
      ? contactsResponse.data 
      : (contactsResponse.data.data || contactsResponse.data.contacts || []);
    
    if (contacts.length === 0) {
      return res.status(404).json({ 
        error: "Contact not found",
        message: "No contact found with the provided email address",
        email 
      });
    }

    // Get the first contact (assuming email is unique)
    const contact = contacts[0];
    const contactId = contact.id;

    if (!contactId) {
      return res.status(404).json({ 
        error: "Contact not found",
        message: "Could not retrieve contact ID from response",
        email 
      });
    }

    // Extract tags from the contact object
    // Tags are already included in the contact response as an array of objects
    let userTags = [];
    if (contact.tags && Array.isArray(contact.tags)) {
      userTags = contact.tags.map(tag => {
        // Tags are objects, extract the name or id
        if (typeof tag === 'string') {
          return tag;
        }
        return tag.name || tag.id || tag;
      });
    }

    return res.status(200).json({
      success: true,
      email,
      contact_id: contactId,
      tags: userTags,
    });
  } catch (error) {
    console.error("Error fetching user tags:", error.response?.data || error.message);
    
    // Handle different error scenarios
    if (error.response?.status === 401) {
      return res.status(401).json({ 
        error: "Unauthorized. Please check your ClickFunnels API token.",
        details: error.response?.data?.error || error.response?.data?.message 
      });
    }
    
    if (error.response?.status === 404) {
      return res.status(404).json({ 
        error: "Contact not found",
        email: req.params.email 
      });
    }

    if (error.response?.status === 422) {
      return res.status(422).json({ 
        error: "Validation error",
        details: error.response?.data?.errors || error.response?.data?.message,
        email: req.params.email 
      });
    }

    return res.status(500).json({ 
      error: "Internal server error",
      message: error.message,
      details: error.response?.data 
    });
  }
};

