//filename: index.js

//import express
let express = require('express');

//impoet body parser
let bodyParser = require('body-parser');

//import mongoose
let mongoose = require('mongoose');

//init app
let app = express();

//import Routes
let apiRoutes = require("./api-routes");

//configuration bodyParser
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

//connect mongoose and  set connection variable
mongoose.connect('mongodb://localhost/tugasCRUD');

var db = mongoose.connection;


//setup
var port = process.env.port || 8080;

//send message
app.get('/',(req,res) => res.send("Selamat datang dengan Express dan Nodemon Tugas CRUD"));

// app respons apiRoutes
app.use('/',apiRoutes);

//launch app
app.listen(port,function(){
    console.log("Running RestHub on Port"+ port)
})