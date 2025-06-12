/*
req = tudo que vem do cliente para o servidor.
res = tudo que você envia do servidor para o cliente.
*/
const express = require("express") //Importação do Express:

const app = express(); 

app.get("/", function (req, res) { // sempre que uso apenas o barra se refere a minha rota 
    res.sendFile(__dirname + "/html/index.html") //__dirname retorna o diretorio absoluto da aplicação
})

app.get('/sobre', function (req, res) { // estou criando uma rota simples
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/entregas/:id", function (req, res) { //Estou cliando uma rota e passando um parametro id, um request
    if (req.params.id == 1) {
        res.send('entrega maria'+ req.params.id)
    } else if (req.params.id !== 1) {
        res.send('Page is no found')
    }
})

app.listen(8081, function () {
    console.log('servior rodando...')
})