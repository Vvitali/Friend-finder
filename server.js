var DEBUG = process.argv[2];
var app  = new require("express")();
var apiRouter = new require("express").Router();

var apiRoutes = require("./routing/apiRoutes.js")
var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");


DEBUG && console.log("Server file! DEBUG MODE ON");

app.get("/?(index.html)?", function(request, response){
	response.send("<h2>"+process.argv[2]+"</h2>");
});

app.get("/survey(.html)?", function(request, response){
	response.send("<h2>"+"Survey page!"+"</h2>");
});

app.use("/api/friends", apiRoutes);



apiRouter.route("/?(index.html)?").get(function(request, response){
	response.send("<h2>"+"Welcome to Friends API"+"</h2>");
});

apiRouter.route("/:testId").get(function(request, response){
	console.log(friendsListFile);
	response.send("<h2>"+request.params["testId"]+"</h2>");
});




app.listen(8000);