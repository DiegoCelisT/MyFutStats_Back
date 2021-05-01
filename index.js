//Módulos:
const colors = require ('colors')
const express = require ('express')
const cors = require ('cors') //Para aquele problema de permisão de cors
const { Sequelize, DataTypes } = require ('sequelize')
// const path = require('path');


//Especificação da BD:
const app = express ();
const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage:'./futebol.db'
});

//Para poder comunicarse desde EJS con nuestra base de datos
// const sqlite3 = require('sqlite3').verbose();
// const db_nome = path.join(__dirname, 'futebol.db'); //Define un nombre y la ubicacion de la DB
// const db = new sqlite3.Database('futebol.db');

//Aplicando o modulo de CORS:
app.use(cors())

//Aplicando o modulo de EJS:
// app.set('view engine', 'ejs')


//Chamando o modelo e fazendo a conexão com a BD (O nome da primeira constante deve ser o valor retornado no modelo de clubes.js):
const Clubes = require ('./models/clubes')
const clubesAll = Clubes ( sequelize, DataTypes)
const Liga = require ('./models/liga')
const Ligas = Liga ( sequelize, DataTypes)

// Constante para utilizar o porto desde os templates
const port = 3030

// Para analisar os JSON provenientes das requisições (Sem isso não tem como interpretar o que chega)
app.use(express.json())

// Para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));    

app.get ('', (req, res) =>{
    res.send ('Página principal :P')
})

//GET Mostrar todos os clubes
app.get('/clubes', async (req, res) =>{    
    const clubes = await clubesAll.findAll()
    
    // res.render('clubes', { clubes: clubes, port: port })
    res.json ({ clubes })
})

//GET Mostrar UM clube só (por ID):
app.get('/clube/:id', async (req, res) =>{
    const clube_ID = req.params.id //Aqui tô pegando o parametro id da requisição app.get('/clubes/:id'... [os dois pontos chutam esse parametro para o "params"]
    const clube = await clubesAll.findByPk(clube_ID)
    console.log(clube_ID);
    res.json({ clube })

    // res.render('clube', { clubes: clube, port: port })

})

//POST Criar clubes:
app.post('/novoclub', async (req, res) => {
    const body = req.body
    const novo_clube = await clubesAll.create({
        name: body.name,
        urlShield: body.urlShield,
        country: body.country,
        position: body.position,
        pts: body.pts,
        J: body.J,
        V: body.V,
        E: body.E,
        D: body.D,
        GP: body.GP,
        GC: body.GC,
        SG: body.SG,
        YC: body.YC,
        RC: body.RC
    })
    res.json({ novo_clube })
    // res.send('ok')
    // res.render('novoclub', { club: novo_clube, port: port })
})

//PUT Atualizar um clube (uso de try catch para pegar os erros e que não fique carregando):
app.put('/clube/:id', async (req, res) =>{
    try{
        const clube_ID = req.params.id
        const body = req.body
        const clube = await clubesAll.findByPk(clube_ID)
        clube.update({
            name: body.name,
            urlShield: body.urlShield,
            country: body.country,
            position: body.position,
            pts: body.pts,
            J: body.J,
            V: body.V,
            E: body.E,
            D: body.D,
            GP: body.GP,
            GC: body.GC,
            SG: body.SG,
            YC: body.YC,
            RC: body.RC
        });        
        //res.send({ action: 'Atualizando clube', clube: clube })
        res.json({ clube })
    } catch (error) {
        return res.send( `<h1>Esta é uma mensagem amigável de erro :P</h1><br><h2>O que aconteceu foi o seguinte:</h2><br><h2>${error}</h2>`)
    }
})

// DELETE Apagar um clube
app.delete('/clube/:id', async (req, res) => {
    try{
        const clube_ID = req.params.id
        const apagando_clube = await clubesAll.destroy({ where: { ID: clube_ID } })
        // res.send({ action: 'Apagando Clube', apagando_clube: clube_ID })
        res.json({ clube })
        
    } catch (error) {
        return res.send( `<h1>Esta é uma mensagem amigável de erro :P</h1><br><h2>O que aconteceu foi o seguinte:</h2><br><h2>${error}</h2>`)
    }
})

//VERBOS PARA A TABELA DE LIGAS

app.get('/ligas', async (req, res) =>{    
    const MyLeagues = await Ligas.findAll()
    res.json ({ MyLeagues })
})

app.get('/liga/:id', async (req, res) =>{
    const liga_ID = req.params.id
    const Liga = await Ligas.findByPk(liga_ID)
    res.json ({ Liga })
})

app.post('/novaLiga', async (req, res) => {
    const body = req.body
    const novaLiga = await Ligas.create({
        name: body.name,
        active: body.active
    })
    res.json({ novaLiga })
})

app.put('/liga/:id', async (req, res) =>{
    try{
        const liga_ID = req.params.id
        const body = req.body
        const liga = await Ligas.findByPk(liga_ID)
        liga.update({
            name: body.name,
            active: body.active
        });        
        res.send({ action: 'Atualizando liga', liga: liga })
    } catch (error) {
        return res.send( `<h1>Esta é uma mensagem amigável de erro :P</h1><br><h2>O que aconteceu foi o seguinte:</h2><br><h2>${error}</h2>`)
    }
})

app.delete('/ligas/:id', async (req, res) => {
    try{
        const liga_ID = req.params.id
        const apagando_liga = await Ligas.destroy({ where: { ID: liga_ID } })
        res.send({ action: 'Apagando Liga', apagando_liga: liga_ID })
    } catch (error) {
        return res.send( `<h1>Esta é uma mensagem amigável de erro :P</h1><br><h2>O que aconteceu foi o seguinte:</h2><br><h2>${error}</h2>`)
    }
})


// DELETE um clube desde EJS
// app.post('/clubclear/:id', async (req, res) => {
//     const id = req.params.id;
//     const sql = 'DELETE FROM clubes WHERE id = ?';
//     const clube = await clubesAll.findByPk(id)
//     db.run(sql,id,(err, rows) => {
        
//         res.render('clubclear', { clube: clube, port: port })
//     })
// })

//GET Mostrar UM clube para editar dados
// app.get('/clubedit/:id', async (req, res) =>{
//     const clube_ID = req.params.id
//     const clube = await clubesAll.findByPk(clube_ID)
   
//     res.render('clubedit', { clubes: clube, port: port })
// })

// ATUALIZAR Dados do clube
// app.post('/clubatualizado/:id', async (req, res) => {
//     const id = req.params.id;
//     const clube = await clubesAll.findByPk(id)
//     const body = req.body
//     clube.update({
//         name: body.name,
//         urlShield: body.urlShield,
//         country: body.country,
//         position: body.position,
//         pts: body.pts,
//         J: body.J,
//         V: body.V,
//         E: body.E,
//         D: body.D,
//         GP: body.GP,
//         GC: body.GC,
//         SG: body.SG,
//         YC: body.YC,
//         RC: body.RC
//     });
//         res.json({ novo_clube })
//         // console.log(clube)
//         // res.render('clubatualizado', { clube: clube, port: port, id: id })
//     })
// })


//GET Mostrar UM clube atualizado
// app.get('/clubatualizado/:id', async (req, res) =>{
//     const clube_ID = req.params.id
//     const clube = await clubesAll.findByPk(clube_ID)
//     // res.json({ clube })
//     res.render('clubatualizado', { clubes: clube, port: port })
// })



app.listen (port, () => {
    console.log (` Server funcionando no porto ${ port } `.red.bgWhite.italic.bold)
})