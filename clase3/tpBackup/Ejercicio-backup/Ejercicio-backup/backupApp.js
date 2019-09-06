
const fs = require('fs')

/**
 * se va a realizar una copia de los archivos que se encuentran en la variable dir
 * @param {string} directorio donde se encuentran los achivos originales
 * @param {string} backup donde se hace el backup
 */

function goBackUp(dir, dirBackup) {
    motivo = null
    fs.readdir(dir, (err, archivos) => {
        console.log(`intentando copiar de: ${dir} a ${dirBackup}`)

        if (err) {
            return console.log(`Error al ingresar el directorio: ${dir}`);
        }
        
        archivos.forEach(archivo => {
            if (archivo.startsWith('.')) { //si empieza con '.' se toma como archivo oculto
                motivo = `un archivo o carpeta oculto/a no se puede respaldar`
            } else if (!archivo.includes('.')) { //si no tiene '.' se toma como carpeta
                motivo = `una carpeta no se puede respaldar`
            } else {
                fs.readFile(`${dir}/${archivo}`, 'utf8', (err, data) => {
                    if (err) {
                        console.log(err)
                    }
                    console.log(data)
                    fs.writeFile(`${dirBackup}/backup-${archivo}`, data, err => {
                        if (err) {
                            console.log(err)
                        }
                    })
                })
            }

            if (motivo != null) { //si hay motivo por lo tanto hay error... se crea un log
                crearLogErr(archivo, motivo, err)
                motivo = null //se vuelve a actualizar el estado de motivo
            }
        })
    })
}


function crearLogErr(archivo, motivo, err) {

    if (err) {
        return console.log('no se pudo crear el log')
    } else {

        const logMsg = `
            =================================
            no se pudo respaldar el archivo -----> ${archivo}
            motivo -----> ${motivo}
        
            `

        const logFile = 'ErrorsLog.txt'

        fs.appendFileSync(logFile, logMsg)
    }
}


/** Implementacion --> */

goBackUp('./original', './backup')
