var express = require('express');
var path = require('path');


app.use(express.static(__dirname + '/public/'));
//app.use('/trumbowyg', express.static(__dirname + '/node_modules/trumbowyg/dist/'));


var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var templates = [
  {
    name: 'Template 1',
    html: 'I am an MIT template!'
  },
  {
    name: 'Template 2',
    html: 'I am a different MIT template 2!'
  },
  {
    name: 'Template 3',
    html: 'I am a different MIT template 3!'
  },
  {
    name: 'Template 4',
    html: 'I am a different MIT template 4!'
  },
  {
    name: 'Template 5',
    html: 'I am a different MIT template 5!'
  },
  {
    name: 'Template 6',
    html: 'I am a different MIT template 6!'
  },
  {
    name: 'Template 7',
    html: 'I am a different MIT template 7!'
  }
];

app.get("/api/templates", function(req, res) {
  return res.json(templates);
});


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
