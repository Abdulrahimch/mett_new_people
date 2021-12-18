const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        conversation: {
            type: mongoose.Types.ObjectId,
            ref: "conversation",
            required: true,
        },
        sender: {
            type: mongoose.Types.ObjectId,
            ref: "user",
            required: true,
        },
        text: String
    },
    {
        timestamps: true
    }
);

module.exports = Message = mongoose.model("message", messageSchema);

