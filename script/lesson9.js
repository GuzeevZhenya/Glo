//Кнопку "Рассчитать" через id
let buttonStart = document.getElementById('start');
//Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let incomAdd = document.getElementsByTagName('button')[0]
//Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let expensesAdd = document.getElementsByTagName('button')[1]
//Чекбокс по id через querySelector
let checkboxItems = document.querySelector('#deposit-check')
//Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let additionalIncomeItems = document.querySelectorAll('.additional_income-item');
// Доход за месяц input
let monthBudgetValueInput = document.getElementsByClassName('budget_month-value');
// Доход за день input
let dayBudgetValueInput = document.getElementsByClassName('budget_day-value');
// Затраты за месяц input
let monthExpensesValueInput = document.getElementsByClassName('expenses_month-value');
// Возможные доходы input
let additionalIncomeValueInput = document.getElementsByClassName('additional_income-value');
// Возможные расходы input
let additionalExpensesValueInput = document.getElementsByClassName('additional_expenses-value');
//Накопления за период input
let incomePeriodValueInput = document.getElementsByClassName('income_period-value');
// Срок достижения цели в месяцах
let targetMonthValueInput = document.getElementsByClassName('target_month-value');
// range
const periodSelect = document.querySelector('.period-select'); 
//Оставшиеся input через querySelector();
//Месячный доход(сумма);
let salaryAmountInput = document.querySelector('.salary-amount');
// Заголовок возможный доход 
let incomeTitleInput = document.querySelector('.income-title');
// Сумма возможного дохода 
let incomeAmountInput = document.querySelector('.income-amount');
// Заголовок обязательные расходы
let expensesTitleInput = document.querySelector('.expenses-title');
//  Обязательные расходы сумма
let expensesAmountInput = document.querySelector('.expenses-amount');
//Возможные расходы 
const additionalExpensesItemInput = document.querySelector('.additional_expenses-item');
//Сумма дипозита
const depositAmountInput = document.querySelector('.deposit-amount');
//Процент дипозита
const depositPercentInput = document.querySelector('.deposit-percent');
//Цель
const targetAmountInput = document.querySelector('.target-amount');

console.log(buttonStart);
console.log(periodSelect);
console.log(incomAdd);
console.log(expensesAdd);
console.log(checkboxItems);
console.log(additionalIncomeItems);
console.log(monthBudgetValueInput);
console.log(dayBudgetValueInput);
console.log(monthExpensesValueInput);
console.log(additionalIncomeValueInput);
console.log(additionalExpensesValueInput);
console.log(incomePeriodValueInput);
console.log(targetMonthValueInput);
console.log(salaryAmountInput);
console.log(incomeTitleInput);
console.log(incomeAmountInput);
console.log(expensesTitleInput);
console.log(expensesAmountInput);
console.log(additionalExpensesItemInput);
console.log(depositAmountInput);
console.log(depositPercentInput);
console.log(targetAmountInput);