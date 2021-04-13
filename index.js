let timeToday = document.querySelector('#time');
let newTimeToday = document.querySelector('#time-1');


let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятницы', 'Субботы'];
let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


function hourFormat(hour) {
	let hoursAray = [2, 3, 4, 22, 23, 24];
	if (hour === 1 || hour === 21) {
			return 'час'
	}
	if (hoursAray.indexOf(hour) !=-1) {
		return 'часа'
	} else {
		return 'часов'
	}
}

function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function time() {
	
}



function showTime() {
	let data = new Date();
	let hour = data.getHours(); //Время
	let min = data.getMinutes(); //Минуты
	let sec = data.getSeconds(); //Секунды
	
	let dayName = data.getDay(); //День
	let monthDay = data.getMonth(); //Месяц
	let yearDay = data.getFullYear(); //Год
	let dayToday = data.getDate();
	timeToday.innerHTML = `Сегодня ${days[dayName]}, ${dayToday} ${month[monthDay]}, ${yearDay} года ,${hour} ${hourFormat()} ${addZero(min)} минут ${addZero(sec)} секунды  `;
	 
	newTimeToday.innerHTML = `${addZero(dayToday)}.${addZero(monthDay + 1)}.${addZero(yearDay)} - ${hour}:${addZero(min)}:${addZero(sec)}`
}
setInterval(showTime, 1000);

