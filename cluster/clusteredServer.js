'use strict';

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    Object.keys(cluster.workers).forEach(function(id) {
        console.log("I am running with ID : " + cluster.workers[id].process.pid);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
}
else { // Workers
    http.createServer(function(req, res) {
        res.statusCode = 200;
        res.end('This kind of response came back from worker: ' + cluster.worker.id);
    }).listen(8080, function() {
        console.log('Server started, worker id: ' + cluster.worker.id);
    });
}