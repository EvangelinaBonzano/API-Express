const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');

//Routing

app.get('/', (req, res) => {

    res.send('Mi primer servidor con Express. Cursos.');

});

const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});