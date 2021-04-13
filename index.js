let ulElement = document.querySelector('ul');
let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener('click', (e) => {
	e.preventDefault();
	let inputValue = input.value;
	let newElement = document.createElement('li');
	newElement.innerHTML = inputValue;
	ulElement.appendChild(newElement);
	input.value = "";
})

