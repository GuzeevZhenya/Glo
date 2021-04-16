todoControl = document.querySelector('.todo-control')
headerInput = document.querySelector('.header-input')
todoList = document.querySelector('.todo-list');
todoCompleted = document.querySelector('.todo-completed');
todoContainer = document.querySelector('.todo-container')


//Массив со значениями
let todoData = [ 
]


if (localStorage.getItem('taskAdd')) {
	todoData = JSON.parse(localStorage.getItem('taskAdd'))
}


const render = function () {
	todoList.textContent = "";
	todoCompleted.textContent = "";
	//Перебераем все дела из массива
	todoData.forEach((item,i) => {
		//Создаем новый элемент li
		const li = document.createElement('li');
		li.classList.add('todo-item');
		//Выводим на страницу разметку
		li.innerHTML = `<span class= "text-todo"> ${item.value} </span>` +
			'<div class="todo-buttons">' +
				'<button class="todo-remove"></button>'+
				'<button class="todo-complete"></button>' +
			'</div>';
	
	//Проверка куда нужно закидывать таски
		if (item.completed) {
			todoCompleted.append(li)
		} else {
			todoList.append(li);
		}
	
		const todoComplet = li.querySelector('.todo-complete');
		todoComplet.addEventListener('click', function () {
			item.completed = !item.completed;
			render();
		})
		
		//Удаление элемента
		const todoRemove = li.querySelector('.todo-remove')
		todoRemove.addEventListener('click', function (e) {
			todoData.splice(i, 1)
			const target = e.target;
			target.parentNode.parentNode.remove();
			localStorage.setItem('taskAdd', JSON.stringify(todoData))
		 		
		})
		localStorage.setItem('taskAdd',JSON.stringify(todoData));
	})
};

todoControl.addEventListener('submit', (e) => {
	e.preventDefault();
	//Объект который принимает значения из input
	const newTodo = {
		value: headerInput.value,
		completed: false,
	};
	if(newTodo.value === ''){
		alert('Введите значение');
	}else{
		todoData.push(newTodo);
		headerInput.value = "";
	}
	render();
})
 

render();

 