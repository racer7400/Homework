const wk = (function () {
    'use strict';

    const week  = ['Sunday', 'Monday', 'Tuesdy', 'Wednesdy', 'Thursdy', 'Friday', 'Shabbos'];

    return {
        getDayName: function (number) {
            return week[number - 1];
        },
        getDayNumber: function (name) {
            for (let i = 0; i < week.length; i++) {
                if (week[i] === name) {
                    return i + 1;
                }
            }
            return 'No such Day';
        }
    };
}());

console.log('wk.getDayName(2)', wk.getDayName(2));
console.log('wk.getDayNumber("Monday")', wk.getDayNumber("Monday"));

const IntRateCalc = (function(){
    'use strict';
    let intRate;
    let amtYrs;

    return {
        setRate: function (rate) {
            intRate = rate;
        },
        setYears: function (years) {
            amtYrs = years;
        },
        calculateInterest: function (principle) {
            return (principle * intRate) * amtYrs;
        }
    };
}());

IntRateCalc.setRate('.03');
IntRateCalc.setYears(10);
console.log(IntRateCalc.calculateInterest(16000));

IntRateCalc.setRate('.08');
IntRateCalc.setYears(25);
console.log(IntRateCalc.calculateInterest(340000));