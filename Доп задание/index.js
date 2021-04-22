const dayTime = document.querySelector('.dayTime');
const dayInfo = document.querySelector('.dayInfo');
const time = document.querySelector('.time');
const daysBeforeNewYear = document.querySelector('.daysBeforeNewYear');
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятницы', 'Субботы'];
let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function getTimeInfo(hour) {
	if (hour > 0 && hour < 5) {
		return 'Доброй ночи'
	} else if (hour > 6) {
		return 'Утро'
	} else if (hour > 11) {
		return 'День'
	} else {
		return 'Вечер'
	}
}

function getTimeRemaining(deadline) {
	const showAmPm = true;
	let data = new Date();
	let hour = data.getHours(); //Время
	let min = data.getMinutes(); //Минуты
	let sec = data.getSeconds(); //Секунды
	const amPm = hour >= 12 ? 'PM' : 'AM';
	let dayName = data.getDay(); //День
	let dateStop = new Date(deadline).getTime();
	let dateNow = new Date().getTime();
	let timeRemaining = Math.floor((dateStop - dateNow) / 1000 / 60 / 60 / 24);
	return {
		hour,min,sec,amPm,dayName,timeRemaining
	}
}

function showInfo() {
	let timer = getTimeRemaining('31 dec 2021');
	dayTime.textContent = `${getTimeInfo(timer.hour)}`;
	dayInfo.textContent = `Сегодня ${days[timer.dayName]}`;
	time.textContent = `Текущее время: ${addZero(timer.hour)}:${addZero(timer.min)}:${addZero(timer.sec)} ${timer.showAmPm ? amPm : ''}`;
	daysBeforeNewYear.textContent = `До нового года осталось ${timer.timeRemaining} дня`;
}

setInterval(showInfo,1000);

// getTimeRemaining();
// setInterval(function () {
// 	getTimeRemaining('23 jun 2021')
// }, 1000);

// setInterval(showTime('31 dec 2021'),1000);
// setInterval(showTime('31 dec 2021'),1000);