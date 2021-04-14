todoControl = document.querySelector('.todo-control')
headerInput = document.querySelector('.header-input')
todoList = document.querySelector('.todo-list');
todoCompleted = document.querySelector('.todo-completed');

//Массив со значениями
const todoData = [{
		value: 'Сварить кофе',
		completed: false,

	},
	{
		value: 'Помыть посуду',
		completed: true,
	},
]

const render = function () {
 

	todoList.textContent = "";
	todoCompleted.textContent = "";
	//Перебераем все дела из массива
	todoData.forEach((item) => {
		//Создаем новый элемент li
		const li = document.createElement('li');
		li.classList.add('todo-item');
		//Выводим на страницу разметку
		li.innerHTML = `<span class= "text-todo"> ${item.value} </span>` +
			'<div class="todo-buttons">' +
			'<button class="todo-complete"></button>' +
			'</div>';
		//Проверка куда нужно закидывать таски
		if (item.completed) {
			todoCompleted.append(li)
		} else {
			todoList.append(li);
		}

		const todoCompl = li.querySelector('.todo-complete');
		todoCompl.addEventListener('click', function () {
			item.completed = !item.completed;
			render();
		})
	})
};

 

todoControl.addEventListener('submit', (e) => {
	e.preventDefault();

	//Объект который принимает значения из input
	const newTodo = {
		value: headerInput.value,
		completed: false,

	};
	todoData.push(newTodo);
	render();
})

render();