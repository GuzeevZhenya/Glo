function getRandomNumber(number) {
	return Math.floor(Math.random() * 100);
}

function isNum (number) {
	return !isNaN(parseFloat(number)) && isFinite(number);
};


function start(number) {
	let num = number;
	let attempts = 3;

	function game() {
		
		attempts--;
		if (attempts < 0) {
			if (confirm('Игра оконченна,повторить?')) {
				start();
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
					alert('Вы угадали число')
				} else if (userNumber > num) {
					alert(`Ваше число больше загаданного, ${attempts}`)
					game();
				} else if (userNumber < num) {
					alert(`Ваше число меньше загаданного, ${attempts}`)
					game();
				} else {
					alert('До свидания')
					return
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


start(getRandomNumber(100));