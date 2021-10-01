var funcion = require('./funcion');

exports.buscar_porTamanio = function (req, res) {

    const arreglo = funcion.tamanio();
    res.render('tamanio.html', {
        data: arreglo
    });
}

exports.Buscar_porExperiencia = function (req, res) {
    const puntosmin = req.body.min_base;
    const puntosmax = req.body.max_base;
    const arreglo = funcion.puntosbase(puntosmin, puntosmax);
    res.render('experiencia.html', {
        data: arreglo
    });
}

exports.buscar_porNombre = function (req, res) {
    const nombre = req.body.nombre;
    const arreglo = funcion.buscar_nombre(nombre);
    if (!arreglo) {

        res.send(`el pokemon ${pokemon} no fue encontrado`);
    } else {
        res.render('Busqueda.html', {
            Nombre: arreglo.name,
            image: arreglo.image
        });

    }
}

exports.enlistar_tipos = function (req, res) {
    const arreglo = funcion.enlistartipos();
    res.render('index.html', {
        data: arreglo
    });
}

exports.buscar_porTipo = function (req, res) {
    const tipo = req.body.t_pokemon;
    const arreglo = funcion.buscar_tipos(tipo);
    res.render('tipos.html', {
        tipo: tipo,
        data: arreglo
    });
}