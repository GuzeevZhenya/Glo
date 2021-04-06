function hardTaskFour(name) {
	if (typeof (name) != 'string') {
			console.log(('Вы ввели не строку'))
	} else {
		console.log(name.trim());
	if (name.length > 30) {
		console.log(name.slice(0, 30) + '...');
	} else {
		console.log(name);
	}
	}
	
}
 
hardTaskFour(' ergergergergergergergergergergergkkjghvndgjdfgdgsdfkrt');
hardTaskFour(43);