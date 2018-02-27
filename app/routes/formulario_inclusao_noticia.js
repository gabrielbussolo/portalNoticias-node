module.exports = app => {
    app.get('/formulario_add_noticia', (requisicao, resposta) => {
        resposta.render('admin/form_add_noticia')
    })
}

