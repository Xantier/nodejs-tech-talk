'use strict';

var http = require('http');
var fs = require('fs');

fs.readFile('../index.html', {encoding: 'utf8'}, function (err, html) {
    if(err) console.log(err.message);
    http.createServer(function(req, res) {  
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();
    }).listen(8080, function(){
        console.log('Server started');
    });
});