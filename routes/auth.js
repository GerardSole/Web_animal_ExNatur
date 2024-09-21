const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Ruta de registro de usuario
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Verificar si los datos son correctos
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        user = new User({ username, email, password });
        user.password = await bcrypt.hash(password, 10);  // Encriptar la contraseña
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', error: err });
    }
});

module.exports = router;
