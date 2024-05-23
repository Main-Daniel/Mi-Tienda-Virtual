const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

// Importar Rutas
const clientRoutes = require('./routes/clientRoutes');
const providerRoutes = require('./routes/providerRoutes');
const userRoutes = require('./routes/userRoutes');

// Usar Rutas
app.use('/api/clients', clientRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/users', userRoutes);

module.exports = app;