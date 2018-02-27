const express = require('express') //pego express
const app = express() //passo o express executando

app.set('view engine', 'ejs') //definindo ejs como gerador das paginas
app.set('views', './app/views') //definindo caminho das views

module.exports = app //exporto o app que é a ossada da aplicacao