var express = require('express');
var app = express();
var path = require('path');

var port = 8080;

app.use(express.static(__dirname + '/public/'));
app.use('/trumbowyg', express.static(__dirname + '/node_modules/trumbowyg/dist/'));


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

