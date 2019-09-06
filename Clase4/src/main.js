const express = require('express')
const app = express()
const functions = require('./functions.js')
const puerto = 3000


app.use(express.json())

var estudiantes = [
    {
        nombre: 'Martin',
        apellido: 'Kraitman',
        dni: '39841438',
        edad: '22'
    },
    {
        nombre: 'Chapulin',
        apellido: 'Colorado',
        dni: '13948273',
        edad: '45'
    },
    {
        nombre: 'Sebastian',
        apellido: 'Balague',
        dni: '38293824',
        edad: '24'
    },
    {
        nombre: 'Roberto',
        apellido: 'Gomez Bolaños',
        dni: '94293923',
        edad: '101'
    },
    {
        nombre: 'Carlos',
        apellido: 'Menem',
        dni: '000000001',
        edad: '22'
    },
    {
        nombre: 'Mirtha',
        apellido: 'Legrand',
        dni: '000000000,001',
        edad: 'undefined'
    },

]


app.listen(puerto, () => {
    console.log(`servidor inicializando en puerto ${puerto}`)
})

/** Devuelve la lista actual de estudiantes */
app.get('/api/estudiantes', (req, res) => {
    console.log('request recibido')

    res.json({ estudiantes })
})

/** 1) Alta de un estudiante, con nombre, apellido, dni, y edad. */
app.post('/api/estudiantes', (req, res) => {
    console.log('POST request recibido')

    estudiantes.push(req.body)

    res.json({
        result: 'ok',
        body: req.body
    })
})

/** 2) Baja de un estudiante, identificándolo por su dni. */
app.delete('/api/estudiantes/:dni', (req, res) => {
    console.log('DELETE request recibido')
    result = 'error'

    obj = functions.buscarPorClave('dni', req.params.dni, estudiantes)
    if (obj != null) {
        estudiantes.pop(obj)
        result = 'OK'
    }

    res.json({
        result,
        dni: req.params.dni
    })
})

/** 3) Modificación de un estudiante, identificándolo por su dni. */
app.patch('/api/estudiantes/:dni', (req, res) => {
    console.log('PATCH request recibido')
    result = 'error'
    obj = functions.buscarPorClave('dni', req.params.dni, estudiantes)
    if (obj != null) {
        i = estudiantes.indexOf(obj)
        estudiantes[i] = req.body
        result = 'OK'
    }

    res.json({
        result,
        estudiante : estudiantes[i]
    })
})

/** 4) Lectura de un estudiante, identificandolo por su dni. */
app.get('/api/estudiantes/:dni', (req, res) => {
    console.log('PATCH request recibido')
    result = 'error'
    obj = functions.buscarPorClave('dni', req.params.dni, estudiantes)
    if (obj != null) {
        result = 'OK'
    }

    res.json({
        result,
        estudiante : obj
    })
})


/** 5) Búsqueda de estudiantes por rango de edad. */
app.get('/api/estudiantes/:min/:max', (req, res) =>{
    console.log()
})



// res.json({

// })

// app.get('/api/estudiantes/:id', (req, res) => {
//     console.log('GET request recibido')
//     i = 0;
//     cached = false
//     result = null
//     while (estudiantes.length > i && !cached) {
//         if (estudiantes[i] + 1 == req.params.id) {
//             result = estudiantes[i]
//             cached = true
//         }

//         res.json({

//         })
//     }
// })






