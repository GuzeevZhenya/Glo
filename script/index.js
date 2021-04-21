 const number = [53,43,23,-234,-12,65,76,-3];
 const names = ['Vlad','All','Victor','Kate','Alex','VicTor'];
 const mix = ['Glo',25,true,'Acc','16',-2,null];
 const badNum = [43,56,43,-43,23,'hi',34];

//  for(let i =0;i<mix.lenght;i++){
// 	 console.log(mix[i]);
// }
 
// mix.forEach(function (item,index,arr) {
// 	console.log(this)
// }, number)

// for (let i = 0; i < names.length; i++){
// 	names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
// }

// names.forEach(function (item, i, arr){
// 	arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// })

const correntName = names.map(function(item){
	return item[0].toUpperCase() + item.slice(1).toLowerCase();
})

console.log(correntName);

let forWords = [];
// for (let i = 0; i < mix.length; i++){
// 	if (typeof mix[i] === 'string' && isNaN(mix[i])) {
// 		forWords.push(mix[i]);
// 	}
// }
// console.log(forWords);

let filterWords = mix.filter((elem) => {
	return typeof elem === 'string' && isNaN(elem);
})
console.log(filterWords)

let positiveNumbers = number.filter(item => item > 0)
console.log(positiveNumbers);

let result = false;
for (let i = 0; i < mix.length; i++){
	if(typeof mix[i] === 'number'){
		result = true;
		break;
	}
}


// let result2 = mix.some(function (item) {
// 	return typeof item === 'number';
// })

// let result3 = mix.every(function (item) {
// 	return typeof item === 'number';
// })

// console.log(result2);

let sum2 = number.reduce((acc, item)=> {
	return acc + item
},0)
 
console.log(sum2);

let arr = [[1, 2], [3, 4], [5, 2]];
const res = arr.reduceRight((acc, item) => acc.concat(item));
console.log(res);