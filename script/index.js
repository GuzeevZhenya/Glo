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

button.addEventListener('click', function () {
	// for (let i=0;i<6;i++){
	// 	let item = items[Math.floor(Math.random() * items.length)];
	// 	result += item;
	// }

	// let a = "#" + result;
	// document.body.style.background = a;
	// console.log(a);
	// result = '';

	let red = Math.floor(Math.random()*256).toString(16);
	let blue = Math.floor(Math.random()*256).toString(16);
	let green = Math.floor(Math.random()*256).toString(16);

	let result = `#${red}${blue}${green}`
	document.body.style.background = result;
	console.log(result);
	
})
console.log(result);
