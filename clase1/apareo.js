const fs = require('fs')

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta 
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    console.log('\n leerArchivoComoString:')
    let result = fs.readFileSync(ruta, 'utf-8')
    return result
}

/**
 * escribe el texto en el archivo de la ruta. si no existe, y no se indica que se lo cree, debe lanzar un error.
 * @param {string} ruta 
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    console.log('\n escribirTextoEnArchivo:')
    try {
        fs.writeFileSync(ruta, texto)
    } catch (e) {
        if (!shouldCreateIfNotExists) {
            fs.writeFileSync(ruta, texto)
        }
        console.log("Error!")
    }
}

/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    console.log('\n transformarStringEnArrayDeNumeros:')
    // array = Array.from(str)

    for (i = 0; i < str.length; i++) {
        if (Number(str[i]).toString() == NaN.toString() && str[i] != separador) {
            str = str.replace(str[i], '')
            i--
        }
    }
    return str.split(separador)
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    console.log('\n transformarArrayDeNumerosAUnSoloString:')
    let result = ''
    for (const i in arr) {
        if (i != (arr.length - 1)) {
            result = result + arr[i] + separador
        } else {
            result = result + arr[i]
        }
    }
    return result
}

/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    console.log('\n combinarDosArrays:')
    result = arrA.concat(arrB)

    return result.sort(compararNros)
}

function compararNros(a, b) {
    return a - b;
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    console.log('\n combinarNArrays:')
    result = []
    for (const i in arrs) {
        result = result.concat(arrs[i])
    }
    return result.sort(compararNros)
}

/**
 * devuelve el indice de la posicion con el menor valor de un array.
 * @param {number[]} valores el array de numeros
 * @returns {number} el indice del menor valor
 */
function findMin(valores) {
    console.log('\n findMin:')
    return valores.indexOf(Math.min.apply(null, valores))
}

function actualizarIndicesYValores(indices, valores, arrs, min) {

}



console.log('____________________________________[TEST]____________________________________')

console.log(leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in'))
console.log(leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in'))

// console.log(transformarArrayDeNumerosAUnSoloString('123 | 456 | 789 | 1bc | 10', '|'))
//console.log(typeof Number() == 'number')
// console.log(Number('a').toString() == NaN.toString())

console.log(transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', '|'))
console.log(transformarArrayDeNumerosAUnSoloString(['123', '456', '789', '10'], ','))
console.log(combinarDosArrays([1, 5, 10], [2, 3, 8, 11]))
console.log(combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]))
console.log(findMin([2, 3, 15, 16]))