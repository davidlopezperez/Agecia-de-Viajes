//Primero creamos nuestro servidor express y lo importamos
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const configs = require('./config');
require('dotenv').config({path: 'variables.env'});

const db = require('./config/database');


db.authenticate()
    .then(()=> console.log('DB Connected'))
    .catch(error => console.log(error));
//Configurar express
const app = express();

//Habilitar pug
app.set('view engine', 'pug');

//Indicar donde estan las vistas
app.set('views', path.join(__dirname, './views'));

//Cargar una carpetsa estatica llamada public

app.use(express.static('public'));

//Validar si estamos en desarrrollo o en producion
const config = configs[app.get('env')];

//Creamos la variable para el sitio web

app.locals.titulo = configs.nombreSitio;

//Muestra el año actual y genera la ruta
app.use((req, res, next)=>{
    //Crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
})

//Ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended: true}));
//Cargar las rutas
app.use('/', routes());

/**PUERTO Y HOST PARA LA APP */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host,()=>{
    console.log('El servidor esta funcionado');
});