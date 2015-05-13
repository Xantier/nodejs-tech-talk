'use strict';

var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
emitter.on('hello', function(){
    console.log('Hello event emitted');
});

emitter.emit('hello');