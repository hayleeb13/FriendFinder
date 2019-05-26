var express = require("express");
var app = express();
var PORT = process.env.PORT || 3306;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('data'));
app.use(express.static('public'));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})