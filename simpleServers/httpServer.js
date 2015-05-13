'use strict';

var http = require('http');
var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.end('This kind of response came back');
});
server.listen(8080, function(err){
    if(err) console.log(err.message);
    else console.log('Server started on port 8080');
});