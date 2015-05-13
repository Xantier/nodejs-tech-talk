'use strict';

var fs = require('fs');

var retrievedFile = fs.readFile('sometextfile.txt', {encoding: 'utf8'}, function(err, file){
    if(err) throw new Error('Break everything');
    console.log('File really retrieved');
    console.log('File contents: ' + file);
});
console.log('retrieved file: ' + retrievedFile);