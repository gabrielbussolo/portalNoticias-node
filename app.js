const express = require('express')
const app = express() //passo executando

app.get('/', (requisicao, resposta) => {
    resposta.send('To funcionando carai!')
})

app.listen(3000,() => {
    console.log('Servidor rodando com express')
})