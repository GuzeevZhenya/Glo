// let getMessage = function (name) {
//   console.log('hi world');
// }

// setTimeout(function () {
//   console.log('erger')
// }, 3000)


// let idInterval = setInterval(getMessage, 2000, 'vasia');
// let idSetTimeout = setTimeout(getMessage, 4000, 'anton');
// clearInterval(idInterval);

// const spanch = document.querySelector('.spanch');
// const limur = document.querySelector('.limur');
// let count = 0;
// let flyInterval;

// const flyAnimate = function() {
//     flyInterval = requestAnimationFrame(flyAnimate);
//     count++;

//     if (count < 350) {
//         spanch.style.left = count + 'px';
//         limur.style.top = count + 'px';
//     } else if (count < 500) {
//         limur.style.top = count + 'px';
//     } else {
//         cancelAnimationFrame(flyInterval);
//     }
//     console.log(count);
// };

// let animate = false;

// document.addEventListener('click', () => {
//     if (animate) {
//         flyInterval = requestAnimationFrame(flyAnimate);
//         animate = false;
//     } else {
//         animate = true;
//         cancelAnimationFrame(flyInterval);
//     }

// });
// // let limurRun = function () {
// //   count++;
// //   limur.style.top = count + 'px';
// //   if (count < 350) {
// //     setTimeout(limurRun, 20);
// //   }

// // }

// const date = new Date();

window.addEventListener('DOMContentLoaded', () => {
  
  //Timer
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
      timerHours.textContent = addZero(timer.hours);
      timerMinuts.textContent = addZero(timer.minuts);
      timerSeconds.textContent = addZero(timer.seconds);

      console.log(timer);
      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
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
  countTimer('23 april 2021');
});