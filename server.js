const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Otras rutas (por ejemplo, para mensajes)
app.use('/api/messages', messageRoutes);

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'public')));

// Redirigir todas las rutas a index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
