module.exports = app => {
    app.get('/noticias', (requisicao, resposta) => {
        const mysql = require('mysql') // aqui eu to importando o modulo do MYSQL blz...

        const connection = mysql.createConnection({ //createConnection recebe um objeto como parametro
            host: 'localhost', //container docker com mysql
            user: 'root',
            password: 'admin123',
            database: 'portal_noticias'
        }) //beleza, to criando uma conexao, 
        
        connection.query('select * from noticias', (erro, resultado) => {
            if(erro){
                console.log(erro)
            }
            resposta.render('noticias/noticias', {noticias : resultado})

        })

        //resposta.render('noticias/noticias')
    })
}