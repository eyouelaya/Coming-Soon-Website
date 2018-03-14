//the release date is set here where the countdown timer will count to
var releaseDate = new Date("Mar 30, 2018").getTime();
var milisec = 1000;
var min = milisec * 60;
var hr = min * 60;
var day = hr * 24;
var timer;
var d = document.getElementById('days');
var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("seconds");
function showRemaining() {
    //get the date that the browser is currently on
    var now = new Date();
    //calculates the difference between the release date and the now date
    var distance = releaseDate - now;
    if (distance > 0) {
        //converts the difference to from milliseconds to day
        var days = Math.floor(distance / day);
        //converts the difference to from milliseconds to hour
        var hours = Math.floor((distance % day) / hr);
        //converts the difference to from milliseconds to minutes
        var minutes = Math.floor((distance % hr) / min);
        //converts the difference to from milliseconds to seconds
        var seconds = Math.floor((distance % min) / milisec);

        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = seconds;
    }
    //if the timer expires
    else {
        var message = document.getElementById("message");
        //sets the counters to zero
        d.innerHTML = "0";
        h.innerHTML = "0";
        m.innerHTML = "0";
        s.innerHTML = "0";
        //displays timer expired
        message.innerHTML = "Timer Expired";
    }
}
timer = setInterval(showRemaining, 1000);    