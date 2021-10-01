const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const app = express();
const ubicacion = path.join(__dirname, 'archivos');


//Inicio ajustes
app.use(body_parser.urlencoded({
  extended: true
}));
app.set('views', path.join(ubicacion, 'plantillas'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//Fin ajustes


//rutas de servicio
app.use(require('./archivos/direccion/rutas_servicio'));


//estatico
app.use(express.static(ubicacion));

//iniciar el server est
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App iniciado en ${PORT}`));