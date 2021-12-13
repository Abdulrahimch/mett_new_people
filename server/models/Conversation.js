const mongoose = require('mongoose');

const membersScehma = new mongoose.Schema({
     sideOne: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true,
     },
     sideTwo: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true,
     }
});

const conversationSchema = new mongoose.Schema(
    {
        members: [membersScehma]
    },
    {
        timestamps: true
    }
);

module.exports = Conversation = mongoose.model("conversation", userSchema);

