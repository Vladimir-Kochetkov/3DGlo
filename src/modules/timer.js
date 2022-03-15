"use strict";
const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaning = () => {
        const addZero = elem => elem < 10 ? `0${elem}` : elem;

        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;

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

    const updateClock = () => {
        let getTime = getTimeRemaning();
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    };
    updateClock();
};

export default timer;