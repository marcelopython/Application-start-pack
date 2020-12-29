const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')


// function meuMiddleware(req, res, next){
//     req.session = {nome:"Marcelo", sobrenome:"Silva"}
//     console.log('Passei no seu middleware')
//     next()
// }

// route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next){
//     console.log('ainda estou aqui')
//     console.log(req.session.nome)
// });


route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/contato', contatoController.paginaInicial);

module.exports = route;