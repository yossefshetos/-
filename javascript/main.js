var countSec = document.getElementById('countdown-sec'),

    countMin = document.getElementById('countdown-min'),

    countHour = document.getElementById('countdown-hour'),

    countDays = document.getElementById('countdown-days'),

    countHeading = document.getElementById('heading'),

    seconds = Math.ceil(Math.random() * 900000),

    countDown = setInterval(function() {

        secondsChange();

    }, 1000);



function secondsChange() {

    remSec = seconds  % 60,

    min = Math.floor(seconds / 60),

    hour = Math.floor(min / 60),

    days = Math.floor(hour / 24);


    if(remSec < 10) {

        remSec = "0" + remSec;

    }

    countSec.innerHTML      = "Seconds : " + remSec;
    countMin.innerHTML      = "Minutes : " + min;
    countHour.innerHTML     = "Hours : " + hour;
    countDays.innerHTML     = "Days : " + (days + 4);

    if(seconds > 0) {

        seconds -= 1;

    } else {

        clearInterval(countDown);

        countDiv.innerHTML = "مع السلامة";

    }

}


var myMessage = prompt("ادخل اسمك لتعرف موعد وفاتك");

countHeading.innerHTML =  " مع السلامة يا " +  myMessage;
