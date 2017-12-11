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
	var urlencodedParser = bodyParser.urlencoded({extended: true});
	apiRouter.post("/", urlencodedParser, function(request, response){
		if (!request.body) return response.sendStatus(400);
		console.log("Name: "+request.body.name
			+", : "+request.body.photo
			+", : "+request.body.scores);
		console.log(request.body);
		fs.readFile("./data/friends.js", "utf-8", function(error, result){
			error && console.log(error);	
			var friendsList = JSON.parse(result);
			var len = friendsList.length;
			var theBestMatchId=0;
			if(friendsList[0]){
				for(var i = 0, temp=0, theBestMatch= 16; i< len; i++, temp=0){
					temp += Math.abs(friendsList[i].scores[0] -request.body.scores[0]);
					temp += Math.abs(friendsList[i].scores[1] -request.body.scores[1]);
					temp += Math.abs(friendsList[i].scores[2] -request.body.scores[2]);
					temp += Math.abs(friendsList[i].scores[3] -request.body.scores[3]);
					temp += Math.abs(friendsList[i].scores[4] -request.body.scores[4]);
					if (temp <theBestMatch){
						theBestMatch = temp;
						theBestMatchId = i;
					}
				}
				response.send(friendsList[theBestMatchId]);
				response.end("Done!");
			}else {
				response.send(request.body);
			}

			friendsList.push(request.body);
			fs.writeFile("./data/friends.js", JSON.stringify(friendsList), function(error){
				error && console.log(error);
			})
		});
	})
	return apiRouter;
}();



