function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours');
    let timerMinuts = document.querySelector('#timer-minutes');
    let timerSeconds = document.querySelector('#timer-seconds');

    // Получаем конечную дату
    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaining % 60);
        let minuts = Math.floor((timeRemaining / 60) % 60);
        let hours = Math.floor(timeRemaining / 60 / 60) % 24;
        let day = Math.floor(timeRemaining / 60 / 60 / 24);
        return {
            hours,
            minuts,
            seconds,
            timeRemaining
        };
    }

    function updateClock() {
        let timer = getTimeRemaining();
        if (timer.timeRemaining > 0) {
            timerHours.textContent = addZero(timer.hours);
            timerMinuts.textContent = addZero(timer.minuts);
            timerSeconds.textContent = addZero(timer.seconds);
        } else {
            timerHours.textContent = '00';
            timerMinuts.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(interval);
        }
    }

    //Добавление 0
    function addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    let interval = setInterval(updateClock, 1000);
}
export default countTimer;