const db_pokedex = require("../../pokedex.json");

exports.buscar_nombre = function (nombre) {
    const data = db_pokedex.find((p) => p.name.toLowerCase() === nombre.toLowerCase());
    if (!data) {
        return null;
    }
    return data;
}


//se crear un arreglo vacio en el cual se guardan los tipos de pokemons que existen
//utilizando el foreach
exports.enlistartipos = function () {
    let arreglo = [];
    var c = 0;
    db_pokedex.forEach(item => {
        for (let i = 0; i < item.types.length; i++) {
            arreglo[c] = item.types[i];
            c++;
        }
    });
    let resultados = arreglo.filter((item, index) => {
        return arreglo.indexOf(item) === index;
    })
    return resultados;
}

//aca al escoger el tipo usamos la funcion filter para filtar el tipo del pokemon
exports.buscar_tipos = function (tipo) {
    let arreglo = db_pokedex.filter((item, index) => {

        for (let i = 0; i < item.types.length; i++) {
            return tipo === item.types[i];
        }
    })
    return arreglo;
}

//aca le mandamos los 2 parametros y con la funcion filter va a buscar los pokemons que esten en ese rango de puntos
exports.puntosbase = function (min, max) {
    let data_tipos = db_pokedex.filter((item, index) => {

        return parseInt(item.base_experience, 10) >= min && parseInt(item.base_experience, 10) <= max;

    })
    return data_tipos;
}

//aca al selecionar por tamano con la funcion sort nos sirve para ordenarlos por el mas grande y pesado
exports.tamanio = function () {
    let arreglo = db_pokedex.sort(((a, b) => {
        return b.height - a.height && b.weight - a.weight
    }));
    console.log(arreglo.length);
    return arreglo;
}