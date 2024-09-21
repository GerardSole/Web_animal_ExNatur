const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    replyMessage: {
        type: String,
        required: true,
    },
    replies: [this],  // Respuestas anidadas
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const MessageSchema = new mongoose.Schema({
    animal: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    replies: [ReplySchema],  // Respuestas al mensaje
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Message', MessageSchema);
