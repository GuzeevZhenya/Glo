let money = 2222; 
var income = 'frelance'; 
const addExpenses = 'Интернет, Такси, Коммуналка'; 
let deposit = true; 
var mission = 10000; 
const period = 10;
 

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length)
console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей/долларов/гривен/юани`);
console.log(addExpenses.toLowerCase().split(' '));
let budgetDay = money / 30;
console.log(budgetDay);


