const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createConversation, getConversations } = require('../controllers/conversation');

router.route("/").post(protect, createConversation);

router.route("/:id").get(protect, getConversations);

module.exports = router;
