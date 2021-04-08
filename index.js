function getRandomNumber(number) {
	return Math.floor(Math.random() * 100);
}


function start(number) {
	let num = number;

	function game() {

		const userNumber = +prompt('Введите число от 1 до 100 осталось');
		console.log(userNumber);
		if (userNumber === num) {
			alert('Вы угадали число')
		} else if (userNumber > num) {
			alert('Ваше число больше загаданного')
			game();
		} else if (userNumber < num) {
			alert('Ваше число меньше загаданного')
			game();
		} else {
			alert('До свидания')
			return
		}
		
	}
 game();
}


start(getRandomNumber(100));