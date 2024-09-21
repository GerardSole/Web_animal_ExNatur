const express = require('express');
const jwt = require('jsonwebtoken');
const Message = require('../models/Message');
const router = express.Router();

// Enviar un mensaje
router.post('/', async (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ message: 'Token no proporcionado' });

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) return res.status(500).send({ message: 'Token inválido' });

        const { message } = req.body;
        const newMessage = new Message({ userId: decoded.id, message });
        try {
            await newMessage.save();
            res.send({ message: 'Mensaje enviado' });
        } catch (err) {
            res.status(500).send({ error: 'Error al enviar el mensaje', details: err });
        }
    });
});

// Obtener todos los mensajes
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().populate('userId', 'username').sort({ createdAt: -1 });
        res.send(messages);
    } catch (err) {
        res.status(500).send({ error: 'Error al obtener los mensajes', details: err });
    }
});

module.exports = router;
