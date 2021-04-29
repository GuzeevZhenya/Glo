class Todo {
	constructor(form, input, todoList, todoCompleted) {
		this.form = document.querySelector(form)
		this.input = document.querySelector(input)
		this.todoList = document.querySelector(todoList)
		this.todoCompleted = document.querySelector(todoCompleted)
		this.todoData = new Map(JSON.parse(localStorage.getItem('todoList')));
	}

	init() {
		this.form.addEventListener('submit', this.addTodo.bind(this));
		this.render();
		this.handler();

	}

	render() {
		this.todoList.textContent = '';
		this.todoCompleted.textContent = '';
		this.todoData.forEach(this.createItem, this);
		this.addToStorage()
		
	}

	addToStorage() {
		localStorage.setItem('todoList', JSON.stringify([...this.todoData]))
	}

	createItem(todo) {
		const li = document.createElement('li');
		li.classList.add('todo-item');
		li.dataset.key = todo.key;
		li.insertAdjacentHTML('beforeend', `
		<span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
					<button class="todo-edit"></button>
				</div>
		`)
		if (todo.completed) {
			this.todoCompleted.append(li)
		} else {
			this.todoList.append(li);
		}
	}

	addTodo(e) {
		e.preventDefault();
		if (this.input.value.trim()) {
			const newTodo = {
				value: this.input.value,
				completed: false,
				key: this.generateKey()
			}
			this.todoData.set(newTodo.key, newTodo);
			this.render();
		}
	}

	// генерации ключей для добавления нового дела
	generateKey() {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substr(2, 15);
	}

	deleteItem(key) {
		this.todoData.forEach((item, i) => {
			if (item.key === key) {
				this.todoData.delete(i);
			}
		})
		this.render();
	}

	completedItem(key) {
		this.todoData.forEach(item => {
			if (item.key === key) {
				item.completed = !item.completed;
			}
		})
		this.render();
	}

	handler() {
		//делегирование
		const buttons = document.querySelector('.todo-container');
		buttons.addEventListener('click', (e) => {
			let target = e.target;
			if (target.classList.contains('todo-remove')) {
				const key = target.parentNode.parentNode.dataset.key
				this.deleteItem(key);
			} else if (target.classList.contains('todo-complete')) {
				const key = target.parentNode.parentNode.dataset.key
				this.completedItem(key);
			}
		})
	}
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.init();