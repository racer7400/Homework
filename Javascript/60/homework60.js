var pcs = pcs || {};

pcs.clocks = (function () {
    'use strict';
    const clockDiv = document.createElement('div');
    document.body.appendChild(clockDiv);

    function show(clock){
        setInterval(updateTime, 1000);
    }

    function updateTime(){    
        let d = new Date();
        
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        let ampm = "AM";
            
        if (hours >= 12) {
            hours -= 12;
            ampm = "PM";
        }
        if (hours === 0) {
                hours = 12;
            }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        let sep = ":";
        if (d.getSeconds() % 2 === 1) sep = " ";

        clockDiv.innerHTML =  hours + sep + minutes + sep + seconds + " " + ampm;
    }

return {
    show: show
};
}());

var pcs1 = pcs1 || {};

pcs1.clocks1 = (function () {
    'use strict';
    const clockDiv1 = document.createElement('div');
    document.body.appendChild(clockDiv1);

    (function show(){
        setInterval(updateTime1, 1000);
    }());

    function updateTime1(){    
        let d1 = new Date();
        
        let hours1 = d1.getHours();
        let minutes1 = d1.getMinutes();
        let seconds1 = d1.getSeconds();
        let ampm1 = "AM";
            
        if (hours1 >= 12) {
            hours1 -= 12;
            ampm1 = "PM";
        }
        if (hours1 === 0) {
                hour1 = 12;
            }
        if (minutes1 < 10) {
            minutes1 = "0" + minutes1;
        }
        if (seconds1< 10) {
            seconds1 = "0" + seconds1;
        }

        let sep1 = ":";
        if (d1.getSeconds() % 2 === 1) sep1 = " ";

        clockDiv1.innerHTML =  hours1 + sep1 + minutes1 + sep1 + seconds1 + " " + ampm1;
    }

}()); 