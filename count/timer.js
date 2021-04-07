function updateTimer(timestamp, targetElement) {
    var currentTime = Math.floor(Date.now() / 1000);

    var timeBetween = Math.abs(currentTime - timestamp);

    year = 31536000;
    month = 2592000;
    week = 604800;
    day = 86400;
    hour = 3600;
    minute = 60;

    var result = '';

    if (timeBetween >= year) {
        years = Math.floor(timeBetween / year);
        result = years + ' year' + (years == 1 ? '' : 's') + ', ';

        timeBetween = timeBetween % year;
    }

    if (timeBetween > month) {
        months = Math.floor(timeBetween / month);
        result += months + ' month' + (months == 1 ? '' : 's') + ', ';

        timeBetween = timeBetween % month;
    }

    if (timeBetween > week) {
        weeks = Math.floor(timeBetween / week);
        result += weeks + ' week' + (weeks == 1 ? '' : 's') + ', ';

        timeBetween = timeBetween % week;
    }

    if (timeBetween > day) {
        days = Math.floor(timeBetween / day);
        result += days + ' day' + (days == 1 ? '' : 's') + ', ';

        timeBetween = timeBetween % day;
    }

    if (timeBetween > hour) {
        hours = Math.floor(timeBetween / hour);
        result += hours + ' hour' + (hours == 1 ? '' : 's') + ', ';

        timeBetween = timeBetween % hour;
    }

    if (timeBetween > minute) {
        minutes = Math.floor(timeBetween / minute);
        result += minutes + ' minute' + (minutes == 1 ? '' : 's') + ', ';

        timeBetween = timeBetween % minute;
    }

    if (timeBetween > 0)
        result += timeBetween + ' second' + (timeBetween == 1 ? '' : 's') + ', ';

    targetElement.innerHTML = result.substring(0, result.length - 2);
}