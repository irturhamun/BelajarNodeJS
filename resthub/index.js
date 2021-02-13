//filename: index.js

//import express
let express = require('express');

//import Routes
let apiRoutes = require("./api-routes");

//init app
let app = express();

//setup
var port = process.env.port || 8080;

//send message
app.get('/',(req,res) => res.send("Selamat datang di Data Center Siswa"));

// app respons apiRoutes
app.use('/',apiRoutes);

//app respons DataSiswa
app.use('/datasiswa',apiRoutes);

//launch app
app.listen(port,function(){
    console.log("Running RestHub on Port"+ port)
})