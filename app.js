

function clock() {
    const fulldate = new Date();
    var hours = fulldate.getHours();
    var mins = fulldate.getMinutes();
    var secs = fulldate.getSeconds();
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = ":" + mins;
    document.getElementById('secconds').innerHTML = ":" + secs;
}

setInterval(clock, 1000);