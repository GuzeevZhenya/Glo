let mission = 10000;
let money = prompt('Ваш месячный доход');
let costs = prompt('Сумма расходов за месяц');

let accumulatedMonth = getAccumulatedMonth(money, costs);


function getAccumulatedMonth(income,costs){
	return income - costs;
}

function getTargetMonth(month,mission){
		return mission / month;
}




function start() {
	do {
    money = prompt('Ваш месячный доход?');
} while (!isNaN(money));

}
start();

function getExpensesMonth() {
	let sum = 0;

	for (let i = 0; i < 2; i++){
		sum += +prompt('Во сколько это обойдеться');
		if(isNaN(sum)){
			console.log('Вы ввели не число')
		}
	}

	console.log(sum);
	return sum
}
getExpensesMonth();


if (getTargetMonth() < 0) {
	console.log('Цель не будет достигнута')
	
}
else {
	console.log('Цель будет достигнута')
}


console.log(getTargetMonth(accumulatedMonth, mission));




