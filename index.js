// /*
//     Задания по уроку №7
// */

// const isNumber = (n) => {
// 	console.log('n: ', n);
// 	console.log(parseFloat(n));
// 	console.log(isFinite(n));
// 	return !isNaN(parseFloat(n)) && isFinite(n);
// };


// let income = 'фриланс';
// let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'интернет, такси, коммуналка');
// let deposit = confirm('Есть ли у вас депозит в банке?');
// let mission = 100000;
// let period = 12;

// // 1) Переписать функцию start циклом do while
// do {
// 	money = prompt('Ваш месячный доход?');
// } while (!isNumber(money));

// 
// // 2) Добавить проверку что введённые данные являются числом, которые мы получаем 
// // на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth


// let expensesAmount = getExpensesMonth();



// const accumulatedMonth = getAccumulatedMonth(money, expensesAmount);



// const targetMonth = getTargetMonth(mission, accumulatedMonth);

// const budgetDay = accumulatedMonth / 30;


// console.log(addExpenses.toLocaleLowerCase().split(', '));
// console.log('Обязательные расходы за месяц: ', expensesAmount);

// console.log(`Цель будет достигнута за: ${targetMonth} месяцев`):
// 	console.log(`Цель не будет достигнута`);

// console.log('Бюджет на день: ', Math.floor(budgetDay));


// console.log('getStatusIncome(): ', getStatusIncome(budgetDay));

const isNumber = (n) => {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

function start() {
	do {
		money = prompt('Ваш месячный доход?', 60000);
	} while (!isNumber(money));
};

const isString = (str, comma = false) => {
	const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
	return pattern.test(str);
};

start();

let appData = {
	mission: 50000, // желаемая цель (Какую сумму хотите накопить)
	period: 3,
	income: {},
	budget: +money, // Доход за месяц
	budgetDay: 0, // Дневной бюджет (доход за месяц / 30)
	budgetMonth: 0,
	expensesMonth: 0,
	percentDeposit: 0,
	moneyDeposit: 0,
	addExpenses: [], // строка с перечислением дополнительных расходов
	expenses: {}, //список обязательных статей расходов
	deposit: false, // надичие депозита в банке
	getExpensesMonth: function () {
		appData.expensesMonth = 0;
		for (let elem in appData.expenses) {
			appData.expensesMonth += appData.expenses[elem]
		}
	},
	getBudget: function () {
		if (!appData.money) {
			appData.money = 0;
		}
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30);

	},
	getTargetMonth: function () {
		return Math.ceil(appData.mission / appData.budgetMonth);
	},
	getStatusIncome: function () {
		return isNaN(appData.budget) ? 'Упс! Где-то закралась ошибка...' :
			(appData.budget < 0) ? 'Что то пошло не так' :
			(appData.budget < 600) ? 'К сожалению у вас уровень дохода ниже среднего' :
			(appData.budget === 600) ? 'У вас почти средний уровень дохода, но немного не хватает...' :
			(appData.budget < 1200) ? 'У вас средний уровень дохода' :
			(appData.budget === 1200) ? 'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!' :
			'У вас высокий уровень дохода';
	},
	asking: function () {
		if (confirm('Есть ли у вас доп источник заработка? ')) {
			let itemIncome = prompt('Какой у вас есть доп заработок?', 'Таксую');
			let cashIncome = prompt('Сколько в месяц зарабатываете на этом', 10000);
			appData.income[itemIncome] = cashIncome;
		}

		let addExpenses = '';
		do {
			addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
				'интернет, такси, коммуналка');
		} while (!isString(addExpenses, true));

		appData.addExpenses = addExpenses.toLowerCase().split(',').map(val => val.trim());
		console.log('appData.addExpenses: ', appData.addExpenses);
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		for (let i = 0; i < 2; i++) {
			let str = '';
			do {
				str = prompt('Введите обязательную статью расходов?');
			} while (!isString(str));
			appData.expenses[str] = (() => {
				let n = 0;
				do {
					n = prompt('Во сколько это обойдется?');
				} while (!isNumber(n));
				return +n;
			})();
			// console.log(appData.expenses);
		}

	},
	getInfoDeposit: () => {
		if (appData.deposit) {
			let n = 0;
			do {
				n = prompt('Какой годовой процент?', '10');
			} while (!isNumber(n) && n > 0);
			appData.precentDeposit = +n;
			do {
				appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
			} while (!isNumber(n) && n > 0);
			appData.moneyDeposit = +n;
		}
	},
	calcSavedMoney: function () {
		return appData.budgetMonth * appData.period;
	}
}


appData.asking();
appData.getExpensesMonth();
appData.getBudget();

const targetMonth = appData.getTargetMonth();

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log(targetMonth >= 0 ?
	`Цель будет достигнута за: ${targetMonth} месяц(а/ев)` :
	'Цель не будет достигнута');
console.log('Уровень дохода: ', appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let elem in appData) {
	console.log(elem, appData[elem]);
}
appData.getInfoDeposit();

console.log('2) ' + appData.addExpenses.map((val, i) => val[0].toUpperCase() + val.slice(1)).join(', '));