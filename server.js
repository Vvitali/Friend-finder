var DEBUG = process.argv[2];
var app  = new require("express");
var body = require("body-parser");
var path = require("path");
DEBUG && console.log("Server file!");

app.get("/", function(request, response){
	response.send("<h2>Hello world!</h2>");
})