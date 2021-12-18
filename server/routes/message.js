const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createMessage, getAllMessages } = require('../controllers/message');

router.route("/").post(protect, createMessage);

router.route("/:id").get(protect, getAllMessages);

module.exports = router;