let month = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

let list = document.querySelector('.array-list');


let data = new Date();
let weekDay = data.getDay();



month.forEach((item, i) => {
	let str = item;
	if (i === weekDay) {
		str =	`<b>${item}</b>`
	} else {
		str = `${item}`
	}
	if (i === 5 || i === 6) {
		str = `<i>${item}</i>`
	}
	document.body.insertAdjacentHTML('beforeend', `<li>${str}</li>`)
 })


