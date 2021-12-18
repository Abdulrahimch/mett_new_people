const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;
const Message = require("../models/Message");

// @route POST /message/
// @desc create message
// @access Private
exports.createMessage = asyncHandler(async (req, res, next ) => {
    const { conversation, sender, text } = req.body;
    const message = await Message.create({ conversation, sender, text });

    if (message) {
        res.status(201).json({
            success: {
                message
            }
        });
    } else {
        res.status(500)
        throw new Error('Internal Server Error');
    }
}); 

// @route GET /message/:id
// @desc get all messages
// @access Private
exports.getAllMessages = asyncHandler(async (req, res, next) => {
    const conversatinoId = ObjectId(req.params.id);
    const messages = await Message.find({ conversation: conversatinoId });

    if (messages) {
        res.status(200).json({
            success: {
                messages
            }
        })
    } else {
        res.status(500)
        throw new Error("Internal Server Error");
    }
});
