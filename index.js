const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const caminhoIndexHTML = __dirname + '/views/index.html'

    res.sendFile(caminhoIndexHTML)
})
const caminhoPublic = __dirname + '/public'
const middlewarePublic = express.static(caminhoPublic)
app.use('/public', middlewarePublic)


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.post('/name', (req, res) => {
    const nome = req.body.first
    const sobrenome = req.body.last

    res.send(`Nome: ${nome}, Sobrenome: ${sobrenome}`)
})

app.listen(port, () => {
    console.log(`O servidor está funcionando na porta ${port}`)
})