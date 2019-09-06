
const fs = require('fs')

function testArchivosOcultos(dir) {
    fs.readdir(dir, (err, archivos) => {

        archivos.forEach(archivo => {
            if(! /^\..*/.test(archivo)){
                console.log("no es oculto")
            }else{
                console.log("es oculto")
            }
        })
    })
}


testArchivosOcultos('./original')