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
const Liga = require ('./models/liga')
const Ligas = Liga ( sequelize, DataTypes)
const Clubes = require ('./models/clubes')
const clubesAll = Clubes ( sequelize, DataTypes)
const Clubes2 = require ('./models/clubes2')
const clubes2All = Clubes2 ( sequelize, DataTypes)
const Clubes3 = require ('./models/clubes3')
const clubes3All = Clubes3 ( sequelize, DataTypes)
const Clubes4 = require ('./models/clubes4')
const clubes4All = Clubes4 ( sequelize, DataTypes)
const Clubes5 = require ('./models/clubes5')
const clubes5All = Clubes5 ( sequelize, DataTypes)
const Clubes6 = require ('./models/clubes6')
const clubes6All = Clubes6 ( sequelize, DataTypes)

// Constante para utilizar o porto desde os templates
const port = 3030

// Para analisar os JSON provenientes das requisições (Sem isso não tem como interpretar o que chega)
app.use(express.json())

// Para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));    

app.get ('', (req, res) =>{
    res.send ('Página principal :P')
})

//GETS Mostrar todos os clubes
app.get('/clubes', async (req, res) =>{    
    const clubes = await clubesAll.findAll()
    res.json ({ clubes })
})
app.get('/clubes2', async (req, res) =>{    
    const clubes = await clubes2All.findAll()
    res.json ({ clubes })
})
app.get('/clubes3', async (req, res) =>{    
    const clubes = await clubes3All.findAll()
    res.json ({ clubes })
})
app.get('/clubes4', async (req, res) =>{    
    const clubes = await clubes4All.findAll()
    res.json ({ clubes })
})
app.get('/clubes5', async (req, res) =>{    
    const clubes = await clubes5All.findAll()
    res.json ({ clubes })
})
app.get('/clubes6', async (req, res) =>{    
    const clubes = await clubes6All.findAll()
    res.json ({ clubes })
})

//GETS Mostrar UM clube só (por ID):
app.get('/clube/:id', async (req, res) =>{
    const clube_ID = req.params.id //Aqui tô pegando o parametro id da requisição app.get('/clubes/:id'... [os dois pontos chutam esse parametro para o "params"]
    const clube = await clubesAll.findByPk(clube_ID)
    res.json({ clube })
})
app.get('/clube2/:id', async (req, res) =>{
    const clube2_ID = req.params.id
    const clube2 = await clubes2All.findByPk(clube2_ID)
    res.json({ clube2 })
})
app.get('/clube3/:id', async (req, res) =>{
    const clube3_ID = req.params.id
    const clube3 = await clubes3All.findByPk(clube3_ID)
    res.json({ clube3 })
})
app.get('/clube4/:id', async (req, res) =>{
    const clube4_ID = req.params.id
    const clube4 = await clubes4All.findByPk(clube4_ID)
    res.json({ clube4 })
})
app.get('/clube5/:id', async (req, res) =>{
    const clube5_ID = req.params.id
    const clube5 = await clubes5All.findByPk(clube5_ID)
    res.json({ clube5 })
})
app.get('/clube6/:id', async (req, res) =>{
    const clube6_ID = req.params.id
    const clube6 = await clubes6All.findByPk(clube6_ID)
    res.json({ clube6 })
})

//POST Criar clubes:
app.post('/novoclub', async (req, res) => {
    const body = req.body
    const jogadosEquation = body.vitorias+body.empates+body.derrotas
    const pontosEquation = (3*body.vitorias)+body.empates
    const saldoGolsEquation = body.golsPro-body.golsContra
    const novo_clube = await clubesAll.create({
        name: body.name,
        urlShield: body.urlShield,
        country: body.country,
        pontos: pontosEquation,
        jogados: jogadosEquation,
        vitorias: body.vitorias,
        empates: body.empates,
        derrotas: body.derrotas,
        golsPro: body.golsPro,
        golsContra: body.golsContra,
        saldoGols: saldoGolsEquation
    })
    res.json({ novo_clube })
})
app.post('/novoclub2', async (req, res) => {
    const body2 = req.body
    const jogadosEquation = body2.vitorias+body2.empates+body2.derrotas
    const pontosEquation = (3*body2.vitorias)+body2.empates
    const saldoGolsEquation = body2.golsPro-body2.golsContra
    const novo_clube2 = await clubes2All.create({
        name: body2.name,
        urlShield: body2.urlShield,
        country: body2.country,
        pontos: pontosEquation,
        jogados: jogadosEquation,
        vitorias: body2.vitorias,
        empates: body2.empates,
        derrotas: body2.derrotas,
        golsPro: body2.golsPro,
        golsContra: body2.golsContra,
        saldoGols: saldoGolsEquation
    })
    res.json({ novo_clube2 })
})
app.post('/novoclub3', async (req, res) => {
    const body = req.body
    const jogadosEquation = body.vitorias+body.empates+body.derrotas
    const pontosEquation = (3*body.vitorias)+body.empates
    const saldoGolsEquation = body.golsPro-body.golsContra
    const novo_clube3 = await clubes3All.create({
        name: body.name,
        urlShield: body.urlShield,
        country: body.country,
        pontos: pontosEquation,
        jogados: jogadosEquation,
        vitorias: body.vitorias,
        empates: body.empates,
        derrotas: body.derrotas,
        golsPro: body.golsPro,
        golsContra: body.golsContra,
        saldoGols: saldoGolsEquation
    })
    res.json({ novo_clube3 })
})
app.post('/novoclub4', async (req, res) => {
    const body = req.body
    const jogadosEquation = body.vitorias+body.empates+body.derrotas
    const pontosEquation = (3*body.vitorias)+body.empates
    const saldoGolsEquation = body.golsPro-body.golsContra
    const novo_clube4 = await clubes4All.create({
        name: body.name,
        urlShield: body.urlShield,
        country: body.country,
        pontos: pontosEquation,
        jogados: jogadosEquation,
        vitorias: body.vitorias,
        empates: body.empates,
        derrotas: body.derrotas,
        golsPro: body.golsPro,
        golsContra: body.golsContra,
        saldoGols: saldoGolsEquation
    })
    res.json({ novo_clube4 })
})
app.post('/novoclub5', async (req, res) => {
    const body = req.body
    const jogadosEquation = body.vitorias+body.empates+body.derrotas
    const pontosEquation = (3*body.vitorias)+body.empates
    const saldoGolsEquation = body.golsPro-body.golsContra
    const novo_clube5 = await clubes5All.create({
        name: body.name,
        urlShield: body.urlShield,
        country: body.country,
        pontos: pontosEquation,
        jogados: jogadosEquation,
        vitorias: body.vitorias,
        empates: body.empates,
        derrotas: body.derrotas,
        golsPro: body.golsPro,
        golsContra: body.golsContra,
        saldoGols: saldoGolsEquation
    })
    res.json({ novo_clube5 })
})
app.post('/novoclub6', async (req, res) => {
    const body = req.body
    const jogadosEquation = body.vitorias+body.empates+body.derrotas
    const pontosEquation = (3*body.vitorias)+body.empates
    const saldoGolsEquation = body.golsPro-body.golsContra
    const novo_clube6 = await clubes6All.create({
        name: body.name,
        urlShield: body.urlShield,
        country: body.country,
        pontos: pontosEquation,
        jogados: jogadosEquation,
        vitorias: body.vitorias,
        empates: body.empates,
        derrotas: body.derrotas,
        golsPro: body.golsPro,
        golsContra: body.golsContra,
        saldoGols: saldoGolsEquation
    })
    res.json({ novo_clube6 })
})

//PUTS Atualizar um clube (uso de try catch para pegar os erros e que não fique carregando):
app.put('/editclube/:id', async (req, res) =>{
    try{
        const clube_ID = req.params.id
        const body = req.body
        
        const jogadosEquation = body.vitorias+body.empates+body.derrotas
        const pontosEquation = (3*body.vitorias)+body.empates
        const saldoGolsEquation = body.golsPro-body.golsContra
        //Com essas equações se a requisição é feita parcialmente desde o back, então os valores não enviados vão chegar como nulls pois dependen do "body" da requisição, isso foi solucionado no front melhorando a lógica em que o formulário é enviado.
        
        const clube = await clubesAll.findByPk(clube_ID)
        clube.update({
            name: body.name,
            urlShield: body.urlShield,
            country: body.country,
            pontos: pontosEquation,
            jogados: jogadosEquation,
            vitorias: body.vitorias,
            empates: body.empates,
            derrotas: body.derrotas,
            golsPro: body.golsPro,
            golsContra: body.golsContra,
            saldoGols: saldoGolsEquation,
            position: body.position //Só no PUT porque na nossa lógica de negócio só se pode editar ela, não criar desde POST
        });        
        res.json({ clube })
    } catch (error) {
        return res.send( `Esta é uma mensagem amigável de erro :P. O que aconteceu foi o seguinte:${error}`)
    }
})

// DELETE Apagar um clube
app.delete('/clube/:id', async (req, res) => {
    try{
        const clube_ID = req.params.id
        const clube = await clubesAll.destroy({ where: { ID: clube_ID } })
        // res.send({ action: 'Apagando Clube', apagando_clube: clube_ID })
        res.json({ clube })
        
    } catch (error) {
        return res.send( `Esta é uma mensagem amigável de erro :P. O que aconteceu foi o seguinte:${error}`)
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
        return res.send( `Esta é uma mensagem amigável de erro :P. O que aconteceu foi o seguinte:${error}`)
    }
})

app.delete('/ligas/:id', async (req, res) => {
    try{
        const liga_ID = req.params.id
        const apagando_liga = await Ligas.destroy({ where: { ID: liga_ID } })
        res.json({ apagando_liga })
    } catch (error) {
        return res.send( `Esta é uma mensagem amigável de erro :P. O que aconteceu foi o seguinte:${error}`)
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