const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

function isNum (number) {
	return !isNaN(parseFloat(number)) && isFinite(number);
};


function start(number) {
	let num = number;
	let attempts = 10;
	let randomNumber = getRandomNumber(100);

	function game() {
	attempts--;
		if (attempts < 0) {
			if (confirm(`Игра оконченна,повторить? Было загаданно ${randomNumber}`)) {
				start(getRandomNumber(100));
			} else {
				alert('До свидания');
				return
			}
		} else {
			const userNumber = prompt('Введите число от 1 до 100 осталось');

			if (userNumber === null) {
				alert('До свидания');
				return
			}

			if (isNum(userNumber)) {
				if (userNumber === num) {
				} else if (userNumber > randomNumber) {
					alert(`Число меньше  вашего, осталось ${attempts} попыток`)
					game();
				} else if (userNumber <randomNumber) {
					alert(`Число больше вашего, осталось ${attempts} попыток`)
					game();
				} else {
					if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
						start();
				} else {
						alert('До свидания');
						return;
				}
				}
			}
			else {
				alert('Введите число');
				game();
			}
			
		}
	}
	game();
}


start();