const myForm = document.getElementById('myform');
 
myForm.addEventListener('submit', valid);

console.log(myForm.elements);

const elementsForm = [];
//Перебераем и находим элементы формы(инпуты)
for (const elem of myForm.elements) {
	if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
		elementsForm.push(elem);
	}
}

function valid(event) {
	const patternPhone = /^\d+$/;
	elementsForm.forEach(elem => {
		if (!elem.value) {
			elem.style.border = 'solid red'
			event.preventDefault();
		}else{
			elem.style.border = ''
		}

		if(elem.id === 'phone' && !patternPhone.test(elem.value)){
			elem.style.border = 'solid red';
			event.preventDefault();
		}
	})
}