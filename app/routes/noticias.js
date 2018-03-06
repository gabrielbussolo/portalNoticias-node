const dbConnection = require('../../config/dbconnection')

module.exports = app => {
    app.get('/noticias', (requisicao, resposta) => {

        const connection = dbConnection()
        connection.query('select * from noticias', (erro, resultado) => {
            if(erro){
                console.log(erro)
            }
            resposta.render('noticias/noticias', {noticias : resultado})

        })

        //resposta.render('noticias/noticias')
    })
}