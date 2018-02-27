const express = require('express')
const app = express() //passo executando

app.set('view engine', 'ejs') //definindo ejs como gerador das paginas

//rotas
app.get('/', (requisicao, resposta) => {
    resposta.render('home/index') //em vez de .send, se usa .render (render acho que é do EJS)
})
app.get('/formulario_add_noticia', (requisicao, resposta) => {
    resposta.render('admin/form_add_noticia')
})
app.get('/noticias', (requisicao, resposta) => {
    resposta.render('noticias/noticias')
})

app.listen(3000,() => {
    console.log('Servidor rodando com express')
})