const express = require('express') //pego express
const consign = require('consign') // importando o consign (bagulho doido que gerencia as rotas)

const app = express() //passo o express executando

app.set('view engine', 'ejs') //definindo ejs como gerador das paginas
app.set('views', './app/views') //definindo caminho das views

//olha que doidura, executei o consign blz, disse pra ele onde ta as rotas e inclui tudo isso dentro do app (ainda nao sei se into 'e do consig ou do js, vou pesquisar)
consign()
    .include('app/routes')//inclua isso
    .then('config/dbconnection.js')// e isso
    .into(app) // nisso
//pronto as rotas sao carregadas automaticamente

module.exports = app //exporto o app que é a ossada da aplicacao