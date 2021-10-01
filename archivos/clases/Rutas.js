var funcion = require('./funcion');


// Ruta para tamaño
//es la funcion de request y respond para poder ordenarlo por tamano
//en el res le mandamos el archivo html para que nos lleve al archivo cuando le damos click al boton enviar 
//y tambien se le pasa el arreglo que se obtiene con las funciones que seria funcion.tamanio
exports.buscar_porTamanio = function (req, res) {

    const arreglo = funcion.tamanio();
    res.render('tamanio.html', {
        data: arreglo
    });
}

// Ruta experiencia
//lo mismo de arriba pero aqui y tambien se le pasa el arreglo que se obtiene con las funciones que seria puntosbase
//que esta recibiendo lo minimo y lo maximo
exports.Buscar_porExperiencia = function (req, res) {
    const puntosmin = req.body.min_base;
    const puntosmax = req.body.max_base;
    const arreglo = funcion.puntosbase(puntosmin, puntosmax);
    res.render('experiencia.html', {
        data: arreglo
    });
}

// Ruta informacion
//aqui se recibe como parametro el nombre del pokemon y verifica si obtiene sus datos y si existe se envia el nombre
//y la imagen del pokemon
//y si no aparece que no existe
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

// Ruta para tipos
//este lo usamos para cargar los tipos de todos los pokemons
exports.enlistar_tipos = function (req, res) {
    const arreglo = funcion.enlistartipos();
    res.render('index.html', {
        data: arreglo
    });
}

//y aqui recibe el tipo y lo busca y nos devuelve un arreglo
exports.buscar_porTipo = function (req, res) {
    const tipo = req.body.t_pokemon;
    const arreglo = funcion.buscar_tipos(tipo);
    res.render('tipos.html', {
        tipo: tipo,
        data: arreglo
    });
}