const daysH = document.querySelector('.days'),
      hoursH = document.querySelector('.hours'),
      minutesH = document.querySelector('.minutes'),
      secondsH = document.querySelector('.seconds'),
      daysToTime = '25 Marth 2021';

function Timer() {
    const dayDate = new Date(daysToTime),
          nowDate = new Date(),
          totalDate = (dayDate - nowDate) / 1000,
          days = Math.floor(totalDate / 3600 / 24),
          hours = Math.floor(totalDate / 3600) % 24,
          minutes = Math.floor(totalDate / 60) % 24,
          seconds = Math.floor(totalDate) % 60;

    daysH.textContent = days;
    hoursH.textContent = formateTime(hours);
    minutesH.textContent = formateTime(minutes);
    secondsH.textContent = formateTime(seconds);
}
function formateTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

Timer();
setInterval(Timer, 1000);