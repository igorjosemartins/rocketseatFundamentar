
// express irá criar um servidor para mostrar tudo que estamos construindo dentro do navegador

// servidor = pega todos os arquivos js q temos e renderizar no navegador

const express = require('express');

// instanciando o módulo express e guardando na variavel app
const app = express();


/* 
    set = função que existe no express
    primeiro argumento = ferramenta que vamos usar para renderizar html  
    segundo argumento = "ferramenta"
*/ 
app.set("view engine", "ejs");


/* 
    get = método do express (cria uma rota)
    "/" = rota/endereço/site -> ex: igor.com.br"/"
    res = response -> vai ser renderizar o index(.ejs)
    render = renderiza
*/ 
app.get("/", function(req, res){
    const items = [
        {
            title: "I",
            message: "mensagem teste"
        },
        {
            title: "g",
            message: "mensagem teste"
        },
        {
            title: "o",
            message: "mensagem teste"
        },
        {
            title: "r",
            message: "mensagem teste"
        }
    ]

    const subtitle = "EJS é uma linguagem de modelagem para criação de página HTML utilizando JS";

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})


// função do express que escuta uma porta = "8080"
// servidor -> rodando no máquina, quando chamamos a porta 8080 ele irá executar tudo
app.listen(8080);
console.log("Rodando");