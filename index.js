let mission = 10000; 
let money = prompt('Ваш месячный доход');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке');
let expenses1 = prompt('Введите обязательную статью расходов');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется');
let amount2 = prompt('Во сколько это обойдется');
let budgetMonth = +amount1 + +amount2;
let missionMonth = Math.floor(mission / budgetMonth);
let budgetDay = budgetMonth / 30;

if (budgetDay > 1200) {
	console.log('У вас высокий уровень дохода');
} else if(budgetDay >= 600 && budgetDay <= 1200) {
	console.log('У вас средний уровень дохода');
}
else if (budgetDay < 600 && budgetDay > 0) {
	console.log('К сожалению у вас уровень дохода ниже среднего');
}
else {
	console.log('Что то пошло не так');
}

console.log(money);
console.log(addExpenses);
console.log(deposit);
console.log(budgetMonth);
console.log(missionMonth);
console.log(budgetDay);

