let mission = 10000; 

let money = prompt('Ваш месячный доход');
console.log(money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов');
let expenses2 = prompt('Введите обязательную статью расходов');

let amount1 = prompt('Во сколько это обойдется');
let amount2 = prompt('Во сколько это обойдется');

let budgetMonth = +amount1 + +amount2;
console.log(budgetMonth);

let missionMonth = Math.floor(mission / budgetMonth);
console.log(missionMonth);

let budgetDay = budgetMonth / 30;
console.log(budgetDay);

if (budgetDay > 1200) {
	console.log('У вас высокий уровень дохода')
} else if(budgetDay >= 600 && budgetDay <= 1200) {
	console.log('У вас средний уровень дохода')
}
else if (budgetDay < 600 && budgetDay > 0) {
	console.log('К сожалению у вас уровень дохода ниже среднего')
}
else {
	console.log('Что то пошло не так')
}