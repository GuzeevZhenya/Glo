'use strict'
//Кнопку "Рассчитать" через id
let buttonStart = document.getElementById('start');
//Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let btnPlus = document.getElementsByTagName('button')
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];

//Чекбокс по id через querySelector
let checkboxItems = document.querySelector('#deposit-check')
//Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
// Доход за месяц input
let monthBudgetValueInput = document.getElementsByClassName('budget_month-value')[0];
// Доход за день input
let dayBudgetValueInput = document.getElementsByClassName('budget_day-value')[0];
// Затраты за месяц input
let monthExpensesValueInput = document.getElementsByClassName('expenses_month-value')[0];
// Возможные доходы input
let additionalIncomeValueInput = document.getElementsByClassName('additional_income-value')[0];
// Возможные расходы input
let additionalExpensesValueInput = document.getElementsByClassName('additional_expenses-value')[0];
//Накопления за период input
let incomePeriodValueInput = document.getElementsByClassName('income_period-value')[0];
// Срок достижения цели в месяцах
let targetMonthValueInput = document.getElementsByClassName('target_month-value')[0];
// range
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
//Оставшиеся input через querySelector();
//Месячный доход(сумма);
let salaryAmountInput = document.querySelector('.salary-amount');
// Заголовок возможный доход 
let incomeTitleInput = document.querySelector('.income-title');
// Заголовок обязательные расходы
let expensesTitleInput = document.querySelector('.expenses-title');
//  Обязательные расходы сумма
let expensesItems = document.querySelectorAll('.expenses-items');
//Возможные расходы 
const additionalExpensesItemInput = document.querySelector('.additional_expenses-item');
//Сумма дипозита
const depositAmountInput = document.querySelector('.deposit-amount');
//Процент дипозита
const depositPercentInput = document.querySelector('.deposit-percent');
//Цель
const targetAmountInput = document.querySelector('.target-amount');
let targetAmount = document.querySelector('.target-amount');
let incomeItems = document.querySelectorAll('.income-items')


let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

const isString = (str, comma = false) => {
	const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
	return pattern.test(str);
};


let appData = {
	mission: 50000, // желаемая цель (Какую сумму хотите накопить)
	income: {},
	budget: 0, // Доход за месяц
	budgetDay: 0, // Дневной бюджет (доход за месяц / 30)
	budgetMonth: 0,
	expensesMonth: 0,
	percentDeposit: 0,
	incomeMonth: 0,
	moneyDeposit: 0,
	addExpenses: [], // строка с перечислением дополнительных расходов
	addIncome: [],
	expenses: {}, //список обязательных статей расходов
	deposit: false, // надичие депозита в банке
	start: function () {
		// appData.budget = +salaryAmountInput.value;
		// if (salaryAmountInput.value === '') {
		// 	alert('Ошибка ,поле "Месячный доход" должно быть заполнено!')
		// }

			this.getExpenses();
		this.getIncome();
		this.getExpensesMonth();
		this.getAddExpenses();
		this.getAddIncome();
		this.getBudget();
		this.showResult();

		if (start.textContent === 'Рассчитать') {
			this.disableInputs();
			start.textContent = 'Сбросить';
		} else {
			start.textContent = 'Рассчитать';
			this.reset();
		}
	},
	//Вывод всей инфы
	showResult: function () {
		monthBudgetValueInput.value = this.budgetMonth;
		dayBudgetValueInput.value = this.budgetDay;
		monthExpensesValueInput.value = this.expensesMonth;
		additionalExpensesValueInput.value = this.addExpenses.join(', ');
		additionalIncomeValueInput.value = this.addIncome.join(',');
		// incomePeriodValueInput.value = this.calcSavedMoney();
		targetMonthValueInput.value = Math.ceil(this.getTargetMonth());
		periodSelect.addEventListener('input', () => {
			incomePeriodValueInput.value = this.calcSavedMoney();
		});
	},
	//Обнуление инпутов и полей 
	reset: function () {
		let inputText = document.querySelectorAll('input[type=text]');
		incomePlus.style.display = 'block';
		expensesPlus.style.display = 'block';

		for (let i = incomeItems.length; i > 1; i--) {
			incomeItems[i - 1].remove();
		};
		for (let i = expensesItems.length; i > 1; i--) {
			expensesItems[i - 1].remove();
		};

		incomePlus.style.display = '';
		expensesPlus.style.display = '';

		inputText.forEach(item => {
			item.value = '';
			item.disabled = false;
		})
		this.getBudget();
		this.blockStart();

		

		this.budget = 0,
		this.budgetDay = 0,
		this.budgetMonth = 0,
		this.expensesMonth = 0,
		this.percentDeposit = 0,
		this.incomeMonth = 0,
		this.moneyDeposit = 0,
		this.addExpenses = [],
		this.addIncome = [],
		this.income = {},
		this.expenses = {}

	},
	//Блокирование ввода при нажатии на расчет
	disableInputs: function () {
		let inputText = document.querySelectorAll('input[type=text]');
		inputText.forEach(item => {
			item.disabled = 'disabled';
			item.textContent = '';
		})
		this.getBudget();
		this.blockStart();
	},
	//Добавление кнопок,обязательные раходы
	addExpensesBlock: function () {
		const cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
		expensesItems = document.querySelectorAll('.expenses-items');
		if (expensesItems.length === 3) {
			expensesPlus.style.display = 'none';
		}
	},
	addIncomeBlock: function () {
		const cloneIncomeItem = incomeItems[0].cloneNode(true);
		incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
		incomeItems = document.querySelectorAll('.income-items');
		if (incomeItems.length === 3) {
			incomePlus.style.display = 'none';
		}
	},
	getAddExpenses: function () {
		let addExpenses = additionalExpensesItemInput.value.split(',');
		addExpenses.forEach(function (item) {
			item = item.trim();
			if (item !== '') {
				appData.addExpenses.push(item);
			}
		})
	},
	getExpenses: function () {
		expensesItems.forEach(function (item) {
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				appData.expenses[itemExpenses] = cashExpenses;
			}
		})
	},
	getIncome: function () {
		this.incomeMonth = 0;
		incomeItems.forEach(function (item) {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if (itemIncome !== '' && cashIncome !== '') {
				appData.income[itemIncome] = +cashIncome;
				appData.incomeMonth += +cashIncome;
			}
		})
	},
	getAddIncome: function () {
		additionalIncomeItem.forEach(function (item) {
			let itemValue = item.value.trim();
			if (item.value !== '') {
				appData.addIncome.push(itemValue);
			}
		})
	},

	getExpensesMonth: function () {
		for (let elem in this.expenses) {
			this.expensesMonth = +this.expensesMonth + +this.expenses[elem];
		}
		return this.expensesMonth;
	},
	getBudget: function () {
		this.budget = +salaryAmountInput.value;
		this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
		this.budgetDay = Math.floor(this.budgetMonth / 30);
	},
	getTargetMonth: function () {
		return Math.ceil(targetAmount.value / this.budgetMonth);
	},

	getRangeInfo: function () {
		periodAmount.innerHTML = periodSelect.value;
	},
	getStatusIncome: function () {
		return isNaN(this.budget) ? 'Упс! Где-то закралась ошибка...' :
			(this.budget < 0) ? 'Что то пошло не так' :
			(this.budget < 600) ? 'К сожалению у вас уровень дохода ниже среднего' :
			(this.budget === 600) ? 'У вас почти средний уровень дохода, но немного не хватает...' :
			(this.budget < 1200) ? 'У вас средний уровень дохода' :
			(this.budget === 1200) ? 'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!' :
			'У вас высокий уровень дохода';
	},
	getInfoDeposit: () => {
		if (this.deposit) {
			let n = 0;
			do {
				n = prompt('Какой годовой процент?', '10');
			} while (n.trim().length === 0 || !isNumber(n));
			this.percentDeposit = +n;
			do {
				n = prompt('Какая сумма заложена?', 10000);
			} while (n.trim().length === 0 || !isNumber(n));
			this.moneyDeposit = +n;
		}
	},

	calcSavedMoney: function () {
		this.getRangeInfo();
		return this.budgetMonth * periodSelect.value;
	},
	blockStart: function () {
		buttonStart.disabled = +!salaryAmountInput.value;
	}
}

let foo = appData.start.bind(appData);
appData.blockStart();
buttonStart.addEventListener('click', foo);


// buttonStart.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.calcSavedMoney);
salaryAmountInput.addEventListener('input', appData.blockStart)

// appData.getInfoDeposit();
// const targetMonth = appData.getTargetMonth();



// function changeString(e) {
// 	let target = e.target.value;
// 	if (!/^[,. а-яА-ЯёЁ]+$/.test(target)) {
// 		alert('Доупускается ввод только русских букв, пробела, точки и запятой!');
// 	}	
// }
// function changeNumber(e) {
// 	let target = e.target.value;
// 	if (!/^[\d]+$/.test(e.target.value)) {
// 		alert('Доупускается ввод только цифр!');
// 	}	

// }
// document.querySelectorAll('[placeholder="Наименование"]').forEach(item => {
// 	item.addEventListener('input', changeString);
// })

// document.querySelectorAll('[placeholder="Сумма"]').forEach(item => {
// 	item.addEventListener('input', changeNumber);
// })