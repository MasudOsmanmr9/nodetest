var express = require("express");
var app = express();
var bodyParser = require('body-parser');

//requires
var login = require('./controllers/login/login');


var port=process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
//view engine

app.set('view engine', 'ejs');

app.use((req,res,next)=>{
 console.log("HA HA HAHA");
    next();

});



app.listen(port,(req,res)=>{
 console.log("this app started at port "+port);
});

app.use(login);