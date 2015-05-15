'use strict';


module.exports = function(helloString){
    return function(worldString){
        return helloString + ' ' + worldString;
    }
}