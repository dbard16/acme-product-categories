const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const db = require('./db');
const routes = require('./routes');
const path = require('path');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

//set up paths for CSS
app.use('/vendor', express.static(path.join((__dirname, 'node_modules'))));
app.use('/css', express.static(path.join((__dirname, 'css'))));


//nunjucks configure
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//body parsing and method override
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('method-override')('_method'));


app.use('/', routes);


//a
// app.use(function(err, req, res, next){
//   res.render('error', {error:err});
// });


//listening to port
app.listen(port,function(){
  console.log('server listening');
})
