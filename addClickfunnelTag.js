const axios = require("axios");

// remove tag
const addTag = async (email, tags) => {
  const config = {
    method: "post",
    url: `https://aweber-api-remove-tags.herokuapp.com/user/tag/add`,
    headers: {
      "Content-Type": "application/json",
    },
    data: { email, tags },
  };
  const res = await axios(config);
  console.log(res.status, "schedule created successfully (clickfunnel)");
};

module.exports = addTag;
