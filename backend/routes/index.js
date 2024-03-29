var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('"dentro')
  res.render('index');
});

router.get('/calculadora', (req, res, next) => {
  console.log('dentro')
  res.render('calculadora/calculadora', {
    title: "teste"
  })
})

router.get("/exemplo", (req, res, next) => {
  res.render("exemplo/exemplo")
})

router.get("/descricao", (req, res, next) => {
  res.render("descricao/descricao")
})

async function checkAuthenticated(req, res, next) {
  // funcao que testa autenticacao
  if (req.isAuthenticated()) {
    return next()
  }
  // se n houver chave de autenticacao redirecionar ao login
  res.send('não logado');
}

module.exports = router;