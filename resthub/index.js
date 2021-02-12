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
app.get('/',(req,res) => res.send("Hello From Express"));

// app respons apiRoutes
app.use('/api',apiRoutes);

//launch app
app.listen(port,function(){
    console.log("Running RestHub on Port"+ port)
})