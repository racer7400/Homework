var app = app || {};

app.utils = (function (theModule) {
    'use strict';
    let counter = 0;

    theModule.addCounter = function(){
        return counter++;
    }
    theModule.print = function(){
        return counter;
    }

    return theModule;
}(app.utils || {}));

