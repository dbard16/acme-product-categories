'use strict'

var data = {};

function getCatNames(){
  var cats = [];
  for (var cat in data){
    cats.push(cat);
  }
return cats;
}

function getProdsByCat(cat){
  return data[cat];

}

function createProd(prod, cat){

  var maxID = data[cat].reduce(function(max, product){
    if(product.id >max){
      max = product.id;
    }
    return max;
  }, 0);

  var id = maxID +1;

  data[cat].push({'name': prod, 'id': id});

}

function delProd(cat, id){

data[cat] = data[cat].filter(function(product){
  return product.id !== id;
});

}

function createCat(cat){
  data[cat] = [];
}

function delCat(cat){
  delete data[cat];
}

createCat("Food Category");
createCat("Cities Category");

createProd("Apple", "Food Category");
createProd("NYC", "Cities Category");
createProd("Burger", "Food Category");

module.exports = {getCatNames: getCatNames, getProdsByCat: getProdsByCat, createProd: createProd,
delProd: delProd, createCat:createCat, delCat: delCat};
