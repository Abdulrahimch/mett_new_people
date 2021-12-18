const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const Conversation = require('../models/Conversation');
const ObjectId = require("mongoose").Types.ObjectId;

// @route POST /conversation/
// @desc create conversation
// @access Private
exports.createConversation = asyncHandler(async (req, res, next) => {
    const { members } = req.body;

  const conversation = await Conversation.create({members});
  
  if (newConversation) {
      res.status(201).json({
          success: {
            conversation
          }
      });
  } else {
      res.status(500)
      throw new Error('server error')
  }
});

// @route get /conversation/:id
// @desc get all conversations
// @access Private
exports.getConversations = asyncHandler( async (req, res, next) => {
    const conversationOwner = req.params.id;
    const conversations = await Conversation.find({
        members: { $in: ObjectId(conversationOwner) }
    })
      .populate("members", "username imgUrl");

    if (conversations) {
        res.status(200).json({
            success: {
                conversations
            }
        });
    } else {
        res.status(500);
        throw new Error('Server Error')
    }
});




  
