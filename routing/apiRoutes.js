module.exports = function(){
	var fs = require("fs");
	var apiRouter = new require("express").Router();
	var bodyParser = require("body-parser");
	apiRouter.get("/", function(request, response){
		fs.readFile("./data/friends.js", "utf-8", function(error, result){
			error && console.log(error);	
			console.log(JSON.parse(result));
			response.end(result);
		});
	});
	var urlencodedParser = bodyParser.urlencoded({extended: false});
	apiRouter.post("/", urlencodedParser, function(request, response){
		if (!request.body) return response.sendStatus(400);
		console.log("Name: "+request.body.name
			+", : "+request.body.photo
			+", : "+request.body.scores);
		console.log(request.body);
		fs.readFile("./data/friends.js", "utf-8", function(error, result){
			error && console.log(error);	
			var friendsList = JSON.parse(result);
			friendsList.push(request.body);
			fs.writeFile("./data/friends.js", JSON.stringify(friendsList), function(error){
				error && console.log(error);
			})
		});
		response.send("Got it!");
		response.end("Done!");

	})
	return apiRouter;
}();



