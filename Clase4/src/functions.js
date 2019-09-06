

/**
 * 
 * @param {string} clave atributo del objeto con el que pienzo buscar
 * @param {any} valor valor del atributo
 * @param {string[]} arr coleccion que voy a recorrer
 */

function buscarPorClave(clave, valor, arr) {
    i = 0; encontre = false
    object = null
    while (arr.length > i && !encontre) {
        if (arr[i][clave] == valor) {
            encontre = true
            object = arr[i]
        } else {
            i++
        }
    }
    return object
}

function buscarEntreValores() {
    return any
}


module.exports = {
    buscarPorClave
    buscarEntreValores
}