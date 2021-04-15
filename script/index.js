todoControl = document.querySelector('.todo-control')
headerInput = document.querySelector('.header-input')
todoList = document.querySelector('.todo-list');
todoCompleted = document.querySelector('.todo-completed');
todoContainer = document.querySelector('.todo-container')


//Массив со значениями
const todoData = [ 
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
		todoRemove.addEventListener('click',function(e){
			 if(e.target.className = "todo-remove"){
				 e.target.parentNode.parentNode.remove();
			 }
			
		})

		let local = JSON.parse(localStorage.getItem('taskAdd'));
		localStorage.setItem('taskAdd',JSON.stringify(todoData));
		console.log(local);
	 

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