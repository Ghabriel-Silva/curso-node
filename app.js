/*
req = tudo que vem do cliente para o servidor.
res = tudo que você envia do servidor para o cliente.
*/
const express = require("express") //Importação do Express:
const sequelize = require('./models/db')
const app = express(); 
const handlebars = require('express-handlebars')


app.listen(8081, function () {
    console.log('servior rodando...')
})