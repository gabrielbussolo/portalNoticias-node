const http = require('http')

http.createServer((requisicao, resposta) => {
    let categoria = requisicao.url
    
    if(categoria == 'tecnologia'){
        resposta.end('noticias de tecnologia')
    } else {
        resposta.end('Portal de noticias')
    }
}).listen(3000)