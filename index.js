//1
let num = 266219;
//2
stringNumber = num.toString();
let result = (stringNumber.split('').reduce((sum, index) => sum * index))
console.log(result)
//3
let tripleResult = result ** 3;
console.log(tripleResult);

 
//4
console.log(tripleResult.toString().substr(0, 2));