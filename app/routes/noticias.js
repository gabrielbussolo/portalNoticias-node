module.exports = app => {
    app.get('/noticias', (requisicao, resposta) => {
        resposta.render('noticias/noticias')
    })
}