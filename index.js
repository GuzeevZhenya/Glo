let mission = 10000;
let money = prompt('Ваш месячный доход');
let costs = prompt('Сумма расходов за месяц');

let accumulatedMonth = getAccumulatedMonth(money, costs);

let expenses1 = +prompt('Введите обязательную сумму расходов');
let expenses2 = +prompt('Введите обязательную сумму расходов');

let budgetDay = accumulatedMonth / 30;


function getExpensesMonth(expenses1,expenses2){
	return expenses1+expenses2;
}

function getAccumulatedMonth(income,costs){
	return income - costs;
}

function getTargetMonth(accumulatedMonth,mission){
		return mission / accumulatedMonth;
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


