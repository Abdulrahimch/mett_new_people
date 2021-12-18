const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
    {
        members: [{type: mongoose.Types.ObjectId, ref: "user"}]
    },
    {
        timestamps: true
    }
);

module.exports = Conversation = mongoose.model("conversation", conversationSchema);

