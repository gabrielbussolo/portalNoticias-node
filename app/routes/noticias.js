module.exports = app => {
    app.get('/noticias', (requisicao, resposta) => {

        const connection = app.config.dbconnection() //'importando' e executando o modulo de conexao adicionado no consign 
        const noticiasModel = app.app.models.noticiasModel

        noticiasModel.getNoticias(connection, (erro, resultado) => {
            resposta.render('noticias/noticias', {noticias : resultado})
        })

        
    })
}