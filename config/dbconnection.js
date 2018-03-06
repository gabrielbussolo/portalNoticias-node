const mysql = require('mysql') // aqui eu to importando o modulo do MYSQL blz...

const conexaoMySQL = () => {
    return mysql.createConnection({ //createConnection recebe um objeto como parametro
        host: 'localhost', //container docker com mysql
        user: 'root',
        password: 'admin123',
        database: 'portal_noticias'
    }) //beleza, to criando uma conexao,
}
module.exports = () => {
    return conexaoMySQL
}
