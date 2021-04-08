let mission = 10000; // число (Какую сумму хотите накопить)

// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = +prompt('Ваш месячный доход');

// Статья доп дохода
let income = 'фриланс';

// Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” 
//сохранить в переменную addExpenses
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'интернет, такси, коммуналка');

let costs = prompt('Сумма расходов за месяц');
let deposit = confirm('Есть ли у вас депозит в банке?');
let period = 12; // число от 1 до 12 (месяцев)

/* Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
    “Введите обязательную статью расходов?” (например expenses1, expenses2)
    “Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных */
let expensesProduct1 = prompt('Введите обязательную статью расходов?', 'продукты');
let expenses1 = +prompt('Введите обязательную сумму расходов');
let expensesProduct2 = prompt('Введите обязательную статью расходов?', 'бензин, транспорт');
let expenses2 = +prompt('Введите обязательную сумму расходов');


//  Задания по уроку №4



function getExpensesMonth(exp1,exp2){
	return exp1 + exp2;
}

function getAccumulatedMonth(income,costs){
	return income - costs;
}

// Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth
let accumulatedMonth = getAccumulatedMonth(money, costs);

// budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
let budgetDay = accumulatedMonth / 30;

// Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная 
// результат месячного накопления (accumulatedMonth) и возвращает результат
function getTargetMonth(month, mission) {
	return Math.ceil(month / mission);
};

function showTypeOf(data) {
   return(data, typeof (data));
}

// Почистить консоль логи и добавить недостающие, должны остаться:
//  - вызовы функции showTypeOf
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

function getStatusIncome() {
	if (budgetDay < 300) {
		return('Низкий уровень доходов');
	}
	else if (budgetDay <=800) {
		return('Средний уровень доходов');
	} else {
		return('Высокий уровень доходов');
	}j
}

console.log(getExpensesMonth(expenses1, expenses2))
//  - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth)
console.log(`Цель будет достигнута за: ${getTargetMonth(mission, accumulatedMonth)} месяцев`);
console.log(getTargetMonth(accumulatedMonth, mission));
//  - Бюджет на день
console.log('Бюджет на день: ', Math.floor(budgetDay));
console.log(showTypeOf(money));
//  - вызов функции getStatusIncome
console.log(getStatusIncome());
//  - Вывод возможных расходов в виде массива (addExpenses)
console.log(addExpenses.toLocaleLowerCase().split(', '));


