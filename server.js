var DEBUG = process.argv[2];
var app  = new require("express")();
var body = require("body-parser");
var path = require("path");
var fs = require("fs");
DEBUG && console.log("Server file! DEBUG MODE ON");

app.get("/", function(request, response){
	response.send("<h2>"+process.argv[2]+"</h2>");
});

app.get("/survey", function(request, response){
	response.send("<h2>"+"Survey page!"+"</h2>");
});

app.get("/api/friends/:friend_name", function(request, response){
	response.send("<h2>"+request.query+"</h2>");
	
});



app.listen(8000);