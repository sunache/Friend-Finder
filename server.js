// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("app/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));

});




var arrayA = [1, 3, 4, 10, 4, 5];

var arrayB = [1, 5, 4, 10, 4, 5];
// find the matching answers 
Array.prototype.diff = function (arr2) {
  var ret = [];
  this.sort();
  arr2.sort();
  for (var i = 0; i < this.length; i += 1) {
    if (arr2.indexOf(this[i]) > -1) {
      ret.push(this[i]);
    }
  }
  return ret;
};

var result = arrayA.diff(arrayB);

console.log(result);
console.log(result.length);

console.log(Math.max(...arrayA));
console.log(Math.max(...arrayB));








// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
