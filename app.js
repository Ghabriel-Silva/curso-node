
const express = require("express") //Importação do Express:

const app = express();

app.get("/", function (req, res) { // sempre que uso apenas o / se refere a minha rota 
    res.send('Pagina incial')
})

app.get('/produtos', function (req, res) { // estou criando uma rota simples
    res.send('pagina de produtos')
})

app.get("/entregas/:id", function (req, res) { //Estou cliando uma rota e passando um parametro id, umm request
    if (req.params.id == 1) {
        res.send('entrega maria')
    } else if (req.params.id !== 1) {
        res.send('Page is no found')
    }
})

app.listen(8081, function () {
    console.log('servior rodando...')
})