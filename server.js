var DEBUG = process.argv[2];
var app  = new require("express")();
var apiRouter = new require("express").Router();

var apiRoutes = require("./routing/apiRoutes.js");
var htmlRoutes = require("./routing/htmlRoutes.js");

var path = require("path");

DEBUG && console.log("Server file! DEBUG MODE ON");

app.use("/api/friends", apiRoutes);
app.use("/?", htmlRoutes);

app.listen(8000);