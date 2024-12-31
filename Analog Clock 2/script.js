let start = 1;
if ( start == 1 ) {
    let myInterval = setInterval(function() {
        // Rotate second hand
        let clock_seconds = document.getElementById("clock_seconds");
        let seconds = new Date(Date.now()).getSeconds();
        let seconds_deg = parseInt(seconds) * 6;
        let rotate_seconds_string = "rotate(" + seconds_deg + "deg)";
        clock_seconds.style.transform = rotate_seconds_string;

        // Rotate minute hand
        let clock_minutes = document.getElementById("clock_minutes");
        let minutes = new Date(Date.now()).getMinutes();
        let minutes_deg = parseInt(minutes) * 6;
        let rotate_minutes_string = "rotate(" + minutes_deg + "deg)";
        clock_minutes.style.transform = rotate_minutes_string;

        // Rotate hour hand (considering minutes as well)
        let clock_hours = document.getElementById("clock_hours");
        let hours = new Date(Date.now()).getHours();
        let minutesFraction = new Date(Date.now()).getMinutes() / 60;
        
        if (hours >= 12) {
            hours = hours - 12;  // Convert to 12-hour format
        }
        
        let hours_deg = (parseInt(hours) + minutesFraction) * 30;
        let rotate_hours_string = "rotate(" + hours_deg.toString() + "deg)";
        clock_hours.style.transform = rotate_hours_string;

    }, 1000)
}
