module.exports = app => {
    app.get('/', (requisicao, resposta) => {
        resposta.render('home/index') //em vez de .send, se usa .render (render acho que é do EJS)
    })
} //aqui to exportando tudo em uma funcao arrow (ainda nao sei por que to exportando como funcao, e nao como objeto, mas blz, vamos ver mais pra frente se eu entendo)