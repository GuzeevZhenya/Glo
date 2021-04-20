// let result = '';
// let items = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';

// 	for (let i=0;i<6;i++){
// 		let item = items[Math.floor(Math.random() * items.length)];
// 		result += item;
// 	}

// 	let a = "#" + result;
// 	d
// 	console.log(a);
// 	result = '';
// })
// console.log(result);

let result = '';
let button = document.querySelector('.btn');
let colorText = document.querySelector('.color-text');

button.addEventListener('click', function () {
	let red = Math.floor(Math.random(255) * 255);
	let blue = Math.floor(Math.random(255) * 255);
	let green = Math.floor(Math.random(255) *255);
 
	let a = `#${green.toString(16)}${red.toString(16)}${blue.toString(16)}`
	colorText.textContent = a;
	document.body.style.background = a;
})