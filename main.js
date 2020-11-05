function startTime(){

    
    var today = new Date();
    var hrs = today.getHours();
    var mins = today.getMinutes();
    var secs = today.getSeconds();

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";

    var n = weekday[d.getDay()];

    document.getElementById('weekdayName').innerText = n;

    mins = checkTime(mins);
    secs = checkTime(secs);

    document.getElementById('dateBox').innerText = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

    document.getElementById('hoursBox').innerText = hrs ;
    document.getElementById('minutesBox').innerText = mins;
    document.getElementById('secondsBox').innerText = secs;
    var t = setTimeout(startTime, 500);
}

function checkTime(i){
    if(i < 10){
        i = "0" + i
    };
    return i;
}