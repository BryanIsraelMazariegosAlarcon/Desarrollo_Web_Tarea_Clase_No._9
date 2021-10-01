const express = require('express');
const router = express.Router();
var rutas = require('../clases/Rutas.js');

router.get('/', rutas.enlistar_tipos);

router.post('/Nombre_pokemon', rutas.buscar_porNombre);
router.post('/poketipos', rutas.buscar_porTipo);
router.post('/puntos_experiencia', rutas.Buscar_porExperiencia);
router.post('/Tam_pokemon', rutas.buscar_porTamanio);

module.exports = router;