let arr = ['123','435','213','5423','6523','234','43'];

for (let i = 0; i < arr.length; i++){
	if (arr[i][0] === '2' || arr[i][0] === '4') {
		console.log(arr[i]);
	}
}

const dividers = el => {
	let arr = [];
	if (el !== 1) {
			arr.push(1);
			for (let j = 2; j * j <= el; j++) {
					if (el % j === 0) {
							arr.push(j);
					}
			}
	}
	arr.push(el);
	return arr;
}; 

for (let i = 1; i <= 100; i++) {
	const n = dividers(i);
	if (n.length <= 2) {
			console.log(`${i}: Простое число. Делители этого числа: ${n.join(', ')}`);
	}
}

for (let i = 1; i <= 100; i++) {
	console.log(`${i}: Делители этого числа: ${dividers(i).join(', ')}`);
}

console.log(arr.map(item => item).filter(item => item[0] == '2' || item[0] == '4'));
