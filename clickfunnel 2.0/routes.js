const express = require("express");
const router = express.Router();
const controller = require("./Controller");

// Get user tags by email
router.get("/user-tags/:email", controller.getUserTags);

module.exports = router;

