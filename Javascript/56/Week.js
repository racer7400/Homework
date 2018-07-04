var myApp = myApp || {};

myApp.utils = (function (theModule) {
    'use strict';

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    
    theModule.getDayName = function (number) {
        return daysOfWeek[number - 1];
    };

    theModule.getDayNumber = function (name) {
        for (let i = 0; i < daysOfWeek.length; i++) {
            if (daysOfWeek[i] === name) {
                return i + 1;
            }
        }
        return 'No such day';
    };
    
    return theModule;
}(myApp.utils || {}));

console.log('myApp.utils.getDayName(3)', myApp.utils.getDayName(3));
console.log('myApp.utils.getDayNumber("Tuesday")', myApp.utils.getDayNumber("Tuesday"));
