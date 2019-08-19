


//importar =>
require('otroArchivo.js')

//salidas por pantalla
console.log("hola mundo")

//variable global: var

//variable local: sin tipado

//0 es false
if(0){
    console.log("es true")
}else{
    console.log("es falso")
}
// 1 o cualquier otro  numero es true
if(1){
    console.log("es true")
}else{
    console.log("es falso")
}
//cualquier string es true menos ""
if("hola"){
    console.log("es true")
}else{
    console.log("es falso")
}
//"" es falso
if(""){
    console.log("es true")
}else{
    console.log("es falso")
}

//si comparo == no distingue el tipo de dato
if(1 == "1"){
    console.log("es true")
}else{
    console.log("es falso")
}

//si comparo === incluye el tipo de dato
if(1 == "1"){
    console.log("es true")
}else{
    console.log("es falso")
}

//lo mismo para "distinto" != \ !==


//definir variables segun su scope
let var1 = "soy una variable que vive dentro de una funcion"

const VAR2 = "Soy una constante que vive dento de una funcion"

var3 = "Soy una variable global no recomendada de usar"

//va a ciclar 5 veces hasta llegar a 0 (castea implicitamente num a boolean)
//while
num = 5
while(num){
console.log(num)
num--
}

//for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

//para crear un arrayList como vimos en java es con la siguiente asignacion
const lista = [1,2,3,4,5]
//con cons nos referimos a que no se le puede asignar nada pero si puede tener si comportamiento de lista
//esta lista puede tener distintos tipos de datos en sus "posiciones"
//agregar

lista.push(6)
console.log(lista)

//forof remplaza al tipico forEach(:) de JAVA
for (const elem of lista) {
    console.log(elem)
}
    


//forin recorre todos los atributos y metodos de un objeto

persona = new Object()
    persona.nombre = "Martin"
    persona.apellido = "Kraitman"

for (const elem in persona){
    console.log(elem)
}

//Buen sitio para buscar informacion sobre javaScript = https://developer.mozilla.org/es/docs/Web/JavaScript

