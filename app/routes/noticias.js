module.exports = app => {
    app.get('/noticias', (requisicao, resposta) => {

        const connection = app.config.dbconnection() //'importando' e executando o modulo de conexao adicionado no consign 
        connection.query('select * from noticias', (erro, resultado) => {
            if(erro){
                console.log(erro)
            }
            resposta.render('noticias/noticias', {noticias : resultado})
        })
    })
}