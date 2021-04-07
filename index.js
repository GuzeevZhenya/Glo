let mission = 10000;
let money = prompt('Ваш месячный доход');
let costs = prompt('Сумма расходов за месяц');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
    'интернет, такси, коммуналка');

let accumulatedMonth = getAccumulatedMonth(money, costs);

let expenses1 = +prompt('Введите обязательную сумму расходов');
let expenses2 = +prompt('Введите обязательную сумму расходов');

let budgetDay = accumulatedMonth / 30;


function getExpensesMonth(exp1,exp2){
	return exp1 + exp2;
}

function getAccumulatedMonth(income,costs){
	return income - costs;
}

function getTargetMonth(month,mission){
		return mission / month;
}

function showTypeOf(data) {
	return(typeof (data));
}

function getStatusIncome() {
	if (budgetDay < 300) {
		return('Низкий уровень доходов');
	}
	else if (budgetDay <=800) {
		return('Средний уровень доходов');
	} else {
		return('Высокий уровень доходов');
	}
}


console.log(getExpensesMonth(expenses1, expenses2))
console.log(getTargetMonth(accumulatedMonth, mission));
console.log(budgetDay);
console.log(showTypeOf(money));
console.log(getStatusIncome());
console.log(addExpenses.toLocaleLowerCase().split(', '));


