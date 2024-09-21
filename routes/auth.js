const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Ruta de registro de usuario
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Verificar si los campos están completos
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        // Verificar si el usuario ya existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario y encriptar la contraseña
        user = new User({ username, email, password });
        user.password = await bcrypt.hash(password, 10);  // Encriptar la contraseña
        await user.save();

        // Generar el token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(201).json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', error: err });
    }
});

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Verificar si los campos están completos
    if (!email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        // Buscar el usuario por email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
        }

        // Comparar la contraseña ingresada con la almacenada (encriptada)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
        }

        // Generar el token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Enviar la respuesta con el token y el nombre de usuario
        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', error: err });
    }
});

module.exports = router;
