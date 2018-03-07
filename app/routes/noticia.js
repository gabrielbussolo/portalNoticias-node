module.exports = (app) => {
    app.get('/noticia', (requisicao, resposta)=>{
        const connection = app.config.dbconnection()
        const noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, (erro, resultado) => {
            resposta.render('noticias/noticia', {noticia: resultado})
        })
        
    })
}