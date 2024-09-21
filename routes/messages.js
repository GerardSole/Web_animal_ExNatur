const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Ruta para obtener mensajes por animal
router.get('/:animal', async (req, res) => {
    try {
        const messages = await Message.find({ animal: req.params.animal }).sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los mensajes' });
    }
});

// Ruta para agregar un nuevo mensaje
router.post('/', async (req, res) => {
    const { animal, username, message } = req.body;

    if (!animal || !username || !message) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const newMessage = new Message({
            animal,
            username,
            message,
        });

        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (err) {
        res.status(500).json({ message: 'Error al agregar el mensaje' });
    }
});


// Ruta para agregar una respuesta a un mensaje o a otra respuesta
router.post('/reply', async (req, res) => {
    const { messageId, username, replyMessage } = req.body;

    if (!messageId || !username || !replyMessage) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const message = await Message.findOne({ _id: messageId });
        if (!message) {
            return res.status(404).json({ message: 'Mensaje no encontrado' });
        }

        // Crear la nueva respuesta
        const newReply = {
            username,
            replyMessage,
            createdAt: new Date(), // Asegúrate de generar la fecha correctamente
            replies: [],  // Inicializar sin respuestas anidadas
        };

        // Agregar la respuesta a la lista de respuestas
        message.replies.push(newReply);

        await message.save();
        res.status(201).json(newReply); // Enviar la nueva respuesta como respuesta
    } catch (err) {
        res.status(500).json({ message: 'Error al agregar la respuesta', error: err });
    }
});



module.exports = router;
