var app  = new require("express")();

var apiRoutes = require("./routing/apiRoutes.js");
var htmlRoutes = require("./routing/htmlRoutes.js");

var path = require("path");

app.use("/api/friends", apiRoutes);
app.use("/?", htmlRoutes);

app.listen(process.env.PORT || 8080);