module.exports = function(){
	var fs = require("fs");
	var apiRouter = new require("express").Router();
	var bodyParser = require("body-parser");

	apiRouter.get("/?(index.html)?", function(request, response){
		fs.readFile("./public/home.html", "utf-8", function(error, result){
			error && console.log(error);	
			console.log("home page requested");
			response.end(result);
		});
	});

	apiRouter.get("/survey(.html)?", function(request, response){
		
		fs.readFile("./public/survey.html", "utf-8", function(error, result){
			error && console.log(error);	
			console.log("survey page requested");
			response.end(result);
		});
	});
	return apiRouter;
}();



