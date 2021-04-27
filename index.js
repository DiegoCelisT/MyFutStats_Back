//Módulos:
const colors = require ('colors')
const express = require ('express')
const cors = require ('cors') //Para aquele problema de permisão de cors
const { Sequelize, DataTypes } = require ('sequelize')

//Especificação da BD:
const app = express ();
const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage:'./futebol.db'
});

//Aplicando o modulo de CORS:
app.use(cors())

//Aplicando o modulo de EJS:
app.set('view engine', 'ejs')


//Chamando o modelo e fazendo a conexão com a BD (O nome da primeira constante deve ser o valor retornado no modelo de clubes.js):
const Clubes = require ('./models/clubes')
const clubesAll = Clubes ( sequelize, DataTypes)

// Constante para utilizar o porto
const port = 3030

// Para analisar os JSON provenientes das requisições (Sem isso não tem como interpretar o que chega)
app.use(express.json())

// Para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

app.get ('', (req, res) =>{
    res.send ('Página principal :P')
})

//GET Mostrar todas as tarefas
app.get('/clubes', async (req, res) =>{    
    const clubes = await clubesAll.findAll()
    
    res.render('clubes', { clubes: clubes, port: port })
    // res.json ({ clubes })
})

//GET Mostrar UM clube só (por ID):
app.get('/clubes/:id', async (req, res) =>{
    const clube_ID = req.params.id //Aqui tô pegando o parametro id da requisição app.get('/clubes/:id'... [os dois pontos chutam esse parametro para o "params"]
    const clube = await clubesAll.findByPk(clube_ID)
    // res.json({ clube })
    res.render('club', { clubes: clube, port: port })
})

//POST Criar tarefas:
app.post('/clubes', (req, res) => {
    // const body = req.body
    // const novo_clube = await clubesAll.create({
    //     nome: body.nome,
    //     urlEscudo: body.urlEscudo,
    //     país: body.país,
    //     posição: body.posição,
    //     pts: body.pts,
    //     J: body.J,
    //     V: body.V,
    //     E: body.E,
    //     D: body.D,
    //     GP: body.GP,
    //     GC: body.GC,
    //     SG: body.SG,
    //     amarelos: body.amarelos,
    //     vermelhos: body.vermelhos
    // })
    console.log(req.body);
    // res.json({ novo_clube })
    res.send('ok')
})

//PUT Atualizar um clube (uso de try catch para pegar os erros e que não fique carregando):
app.put('/clubes/:id', async (req, res) =>{
    try{
        const clube_ID = req.params.id
        const body = req.body
        const clube = await clubesAll.findByPk(clube_ID)
        clube.update({
            nome: body.nome,
            urlEscudo: body.urlEscudo,
            país: body.país,
            posição: body.posição,
            pts: body.pts,
            J: body.J,
            V: body.V,
            E: body.E,
            D: body.D,
            GP: body.GP,
            GC: body.GC,
            SG: body.SG,
            amarelos: body.amarelos,
            vermelhos: body.vermelhos
        });        
        res.send({ action: 'Atualizando clube', clube: clube })
    } catch (error) {
        return res.send( `<h1>Esta é uma mensagem amigável de erro :P</h1><br><h2>O que aconteceu foi o seguinte:</h2><br><h2>${error}</h2>`)
    }
})

//DELETE Apagar um clube
app.delete('/clubes/:id', async (req, res) => {
    try{
        const clube_ID = req.params.id
        const apagando_clube = await clubesAll.destroy({ where: { ID: clube_ID } })
        res.send({ action: 'Apagando Clube', apagando_clube: apagando_clube })
    } catch (error) {
        return res.send( `<h1>Esta é uma mensagem amigável de erro :P</h1><br><h2>O que aconteceu foi o seguinte:</h2><br><h2>${error}</h2>`)
    }
})



app.listen (port, () => {
    console.log (` Server funcionando no porto ${ port } `.red.bgWhite.italic.bold)
})