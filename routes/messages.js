const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Ruta para obtener mensajes por animal
router.get('/:animal', async (req, res) => {
    try {
        const messages = await Message.find({ animal: req.params.animal }).sort({ createdAt: -1 });
        res.json(messages);  // Asegurarse de devolver JSON
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

module.exports = router;
