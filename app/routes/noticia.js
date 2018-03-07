module.exports = (app) => {
    app.get('/noticia', (requisicao, resposta)=>{
        const connection = app.config.dbconnection()

        connection.query('select * from noticias where id_noticia = 1', (erro, resultado) => {
            resposta.render('noticias/noticia', {noticia: resultado})
        })
    })
}