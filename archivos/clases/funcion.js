const db_pokedex = require("../../pokedex.json");

exports.buscar_nombre = function (nombre) {
    const data = db_pokedex.find((p) => p.name.toLowerCase() === nombre.toLowerCase());
    if (!data) {
        return null;
    }
    return data;
}

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

exports.buscar_tipos = function (tipo) {
    let arreglo = db_pokedex.filter((item, index) => {

        for (let i = 0; i < item.types.length; i++) {
            return tipo === item.types[i];
        }
    })
    return arreglo;
}

exports.puntosbase = function (min, max) {
    let data_tipos = db_pokedex.filter((item, index) => {

        return parseInt(item.base_experience, 10) >= min && parseInt(item.base_experience, 10) <= max;

    })
    return data_tipos;
}

exports.tamanio = function () {
    let arreglo = db_pokedex.sort(((a, b) => {
        return b.height - a.height && b.weight - a.weight
    }));
    console.log(arreglo.length);
    return arreglo;
}