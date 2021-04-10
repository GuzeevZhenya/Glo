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

start();

let appData = {
	mission: 50000, // желаемая цель (Какую сумму хотите накопить)
	period: 3,
	budget: +money, // Доход за месяц
	budgetDay: 0, // Дневной бюджет (доход за месяц / 30)
	budgetMonth: 0,
	expensesMonth: 0,
	addExpenses:[], // строка с перечислением дополнительных расходов
	expenses:{}, //список обязательных статей расходов
	deposit:false, // надичие депозита в банке
	getExpensesMonth: function() {
		appData.expensesMonth = 0;
		for(let elem in appData.expenses){
			appData.expensesMonth += appData.expenses[elem]
		}
	},
	getBudget : function(){
		if (!appData.money) {
			appData.money = 0;
		}
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30);
		
	},
	getTargetMonth: function(){
		return Math.ceil(appData.mission / appData.budgetMonth);
	},
	getStatusIncome: function(){
		return isNaN(appData.budget) ? 'Упс! Где-то закралась ошибка...' :
			(appData.budget < 0) ? 'Что то пошло не так' :
			(appData.budget < 600) ? 'К сожалению у вас уровень дохода ниже среднего' :
			(appData.budget === 600) ? 'У вас почти средний уровень дохода, но немного не хватает...' :
			(appData.budget < 1200) ? 'У вас средний уровень дохода' :
			(appData.budget === 1200) ? 'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!' :
			'У вас высокий уровень дохода';
	},
	asking:function(){
		let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
		'интернет, такси, коммуналка');
			appData.addExpenses = addExpenses.toLowerCase().split(',');
			appData.deposit = confirm('Есть ли у вас депозит в банке?');
		for (let i = 0; i < 2; i++) {
			appData.expenses[prompt('Введите обязательную статью расходов?')] = (() => {
                let n = 0;
                do {
                    n = prompt('Во сколько это обойдется?');
                } while (!isFinite(n));
                return +n;
            })();
		}
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