//Módulos:
const HTTP = require ('http')
const colors = require ('colors')
const express = require ('express')
const cors = require ('cors') //Para aquele problema de permisão de cors

const app = express ()

//Aplicando o modulo de CORS:
app.use(cors())

app.get ('', (req, res) =>{
    res.send ('Server funcionando :P')
})

app.listen (3000, () => {
    console.log (' Server funcionando no porto 3000 '.red.bgWhite.italic.bold)
})