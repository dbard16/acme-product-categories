'use strict'
var express = require('express');
var router = express.Router();
var db = require ('../db');


router.get('/', function(req,res,next){
  var cats = db.getCatNames();

  res.render('index', {categories: cats});
});

router.get('/categories/:name/products', function(req, res, next){
  var thisCat = req.params.name;
  var prods = db.getProdsByCat(thisCat);
  var cats = db.getCatNames();

  res.render('products', {products: prods, categories:cats, nav:thisCat});

});

router.post('/categories', function(req, res, next){
db.createCat(req.body.category);
res.redirect('/');

});

router.delete('/categories/:name', function(req, res, next){
db.delCat(req.params.name);
res.redirect('/');


});

router.post('/categories/:name/products', function(req, res, next){
  db.createProd(req.body.product, req.params.name);
  res.redirect('/categories/' + req.params.name +'/products');

});

router.delete('/categories/:name/products/:id', function(req, res, next){
  db.delProd(req.params.name, req.params.id*1);
  res.redirect('/categories/' + req.params.name +'/products');
});

module.exports = router;
