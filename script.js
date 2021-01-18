const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');

const newyear = '1 jan 2022';

function countdown() {
    const newYearsDate = new Date(newyear);
    const currentDate = new Date();

    const totseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totseconds / 3600 / 24);
    const hours = Math.floor(totseconds / 3600) % 24;
    const mins = Math.floor(totseconds / 60) % 60;
    const seconds = Math.floor(totseconds) %60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);
