const app = require('./config/server') //importando o app aqui

//definindo as rodas da aplicacao, recebo as rotas, jogo elas numa variavel, e executo ela logo apos, (isso me lembra um php include, só pr aincluir um pedaco de codigo)

// let rotaHome = require('./app/routes/home')(app)// posso executar assim
// let rotaFormInclusao = require('./app/routes/formulario_inclusao_noticia')
// rotaFormInclusao(app) //ou assim
// let rotaNoticias = require('./app/routes/noticias')(app)


app.listen(3000,() => {
    console.log('SERVIDOR ON!')
})