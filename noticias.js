const http = require('http');

const server = http.createServer(function(req, res){
    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><meta charset='utf-8'><body><h1>Notícias de Tecnologia</h1></body></html>");
    }else if(categoria == '/moda'){
        res.end("<html><meta charset='utf-8'><body><h1>Notícias sobre Moda</h1></body></html>");
    }else if(categoria == '/saude'){
        res.end("<html><meta charset='utf-8'><body><h1>Notícias sobre Saúde</h1></body></html>");
    }else{
        res.end("<html><meta charset='utf-8'><body><h1>Portal de notícias</h1></body></html>");
    }
});

server.listen(3000);