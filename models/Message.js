const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    animal: {
        type: String, // Identificador del animal
        required: true,
    },
    username: {
        type: String, // Nombre del usuario que envía el comentario
        required: true,
    },
    message: {
        type: String, // Contenido del comentario
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Message', MessageSchema);
