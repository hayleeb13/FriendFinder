var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})