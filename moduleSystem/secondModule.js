'use strict';

var firstMod = require('./firstModule');

var helloFunction = firstMod('Hello');

console.log(helloFunction('Node JS'));