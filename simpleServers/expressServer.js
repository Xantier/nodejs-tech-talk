'use strict';

var express = require('express');
var app = express();

var respo = {
        response: {
            message: "Hello World",
            timestamp: new Date()
        }
    };

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/jussi', function (req, res) {
  res.json(respo);
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
