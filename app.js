const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar Handlebars
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');

// Middleware para servir archivos estáticos
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Datos de productos
const productos = [
    { nombre: 'Banana', imagen: 'banana.png' },
    { nombre: 'Cebolla', imagen: 'cebollas.png' },
    { nombre: 'Lechuga', imagen: 'lechuga.png' },
    { nombre: 'Papa', imagen: 'papas.png' },
    { nombre: 'Pimenton', imagen: 'pimenton.png' },
    { nombre: 'Tomate', imagen: 'tomate.png' }
];

// Ruta raíz
app.get('/', (req, res) => {
    res.render('index', { productos });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
