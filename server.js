var DEBUG = process.argv[2];
var app  = new require("express")();
var apiRouter = new require("express").Router();
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
//apiRouter.js
app.get("/api/friends", function(request, response){
	fs.readFile("./data/friends.js", "utf-8", function(error, result){
		error && console.log(error);	
		DEBUG && console.log(JSON.parse(result));
		response.end(result);
	});
});
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.post("/api/friends", urlencodedParser, function(request, response){
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
//apirouter end



apiRouter.route("/?(index.html)?").get(function(request, response){
	response.send("<h2>"+"Welcome to Friends API"+"</h2>");
});

apiRouter.route("/:testId").get(function(request, response){
	console.log(friendsListFile);
	response.send("<h2>"+request.params["testId"]+"</h2>");
});




app.listen(8000);