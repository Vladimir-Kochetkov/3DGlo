"use strict";
const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaning = () => {
        const addZero = elem =>
            (String(elem).length === 1) ? '0' + elem :
                String(elem);

        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let hours = addZero(Math.floor(timeRemaining / 60 / 60));
        let minutes = addZero(Math.floor((timeRemaining / 60) % 60));
        let seconds = addZero(Math.floor(timeRemaining % 60));
        if (dateStop < dateNow) {
            hours = addZero(0);
            minutes = addZero(0);
            seconds = addZero(0);
            clearInterval(updateClock);
        }

        return { timeRemaining, hours, minutes, seconds };

    };

    let updateClock = setInterval(() => {
        let getTime = getTimeRemaning();
        console.log(getTime);
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
    }, 1000);

};

export default timer;