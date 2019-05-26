var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})