const express = require('express');
const msg = require('./mod_teste')
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index");
});

app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia");
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
});

app.listen(3000, function(){
    console.log(msg());
});