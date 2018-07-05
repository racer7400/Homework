var app = app || {};

app.utils = (function (theModule2) {
    'use strict';
    let totalCounters = 0;

    theModule2.multcounter = function(){
        totalCounters++;
        console.log("totalcount: "+ totalCounters);

        let counter2 = 0;

        let counter = {
            addCounter :() => {return counter2++; },
            print : () => { return counter2;}
        };
        return counter;
    }
return theModule2;
}(app.utils || {}));
