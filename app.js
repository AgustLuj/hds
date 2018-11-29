const express = require('express');
const app = express();
const hbs = require('hbs');
var bodyParse = require('body-parser');
///////////////////////////
app.use(express.static(__dirname +'/public'));
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());
hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine','hbs');
//////////////////////////////////
require('./peticiones/gets.js')(app);
require('./peticiones/post.js')(app);
require('./hbs/helpers.js');
//////////////////////////////////////////7

app.listen(8080,function(){
    console.log('El servidor esta corriendo en el 8080');
})