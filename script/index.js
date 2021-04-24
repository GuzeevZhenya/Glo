//  const number = [53,43,23,-234,-12,65,76,-3];
//  const names = ['Vlad','All','Victor','Kate','Alex','VicTor'];
//  const mix = ['Glo',25,true,'Acc','16',-2,null];
//  const badNum = [43,56,43,-43,23,'hi',34];

// //  for(let i =0;i<mix.lenght;i++){
// // 	 console.log(mix[i]);
// // }
 
// // mix.forEach(function (item,index,arr) {
// // 	console.log(this)
// // }, number)

// // for (let i = 0; i < names.length; i++){
// // 	names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
// // }

// // names.forEach(function (item, i, arr){
// // 	arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// // })

// const correntName = names.map(function(item){
// 	return item[0].toUpperCase() + item.slice(1).toLowerCase();
// })

// console.log(correntName);

// let forWords = [];
// // for (let i = 0; i < mix.length; i++){
// // 	if (typeof mix[i] === 'string' && isNaN(mix[i])) {
// // 		forWords.push(mix[i]);
// // 	}
// // }
// // console.log(forWords);

// let filterWords = mix.filter((elem) => {
// 	return typeof elem === 'string' && isNaN(elem);
// })
// console.log(filterWords)

// let positiveNumbers = number.filter(item => item > 0)
// console.log(positiveNumbers);

// let result = false;
// for (let i = 0; i < mix.length; i++){
// 	if(typeof mix[i] === 'number'){
// 		result = true;
// 		break;
// 	}
// }


// // let result2 = mix.some(function (item) {
// // 	return typeof item === 'number';
// // })

// // let result3 = mix.every(function (item) {
// // 	return typeof item === 'number';
// // })

// // console.log(result2);

// let sum2 = number.reduce((acc, item)=> {
// 	return acc + item
// },0)
 
// console.log(sum2);

// let arr = [[1, 2], [3, 4], [5, 2]];
// const res = arr.reduceRight((acc, item) => acc.concat(item));
// console.log(res);

const myLesson = [
	{lesson: 1, type: 'basic', points: 2},
	{lesson: 2, type: 'additional', points: 4},
	{lesson: 3, type: 'basic', points: 6},
	{lesson: 4, type: 'additional', points: 3},
	{lesson: 5, type: 'basic', points: 4},
	{lesson: 6, type: 'basic', points: 2},
	{lesson: 7, type: 'additional', points: 2},
	{lesson: 8, type: 'basic', points: 6},
	{lesson: 9, type: 'basic', points: 4},
	{lesson: 10, type: 'basic', points: 6},
	{lesson: 11, type: 'additional', points: 5}, 
	{lesson: 12, type: 'basic', points: 2}, 
	{lesson: 13, type: 'additional', points: 2}, 
	{lesson: 14, type: 'basic', points: 4},
	{lesson: 15, type: 'additional', points: 1},
	{lesson: 16, type: 'additional', points: 7},
	 ];
	 let newArray = myLesson
	 .filter(item=>item.type !=='additional')
	 .map(el=>{
		 if(el.type ==='basic')el.points = el.points/2;
		 return el
	 })
	 console.log(newArray);


	 const myLesson2 = [
		{lesson: 1, type: 'basic', points: 2},
		{lesson: 2, type: 'additional', points: 4},
		{lesson: 3, type: 'basic', points: 6},
		{lesson: 4, type: 'additional', points: 3},
		{lesson: 5, type: 'basic', points: 4},
		{lesson: 6, type: 'basic', points: 2},
		{lesson: 7, type: 'additional', points: 2},
		{lesson: 8, type: 'basic', points: 6},
		{lesson: 9, type: 'basic', points: 4},
		{lesson: 10, type: 'basic', points: 6},
		{lesson: 11, type: 'additional', points: 5}, 
		{lesson: 12, type: 'basic', points: 2}, 
		{lesson: 13, type: 'additional', points: 2}, 
		{lesson: 14, type: 'basic', points: 4},
		{lesson: 15, type: 'additional', points: 1},
		{lesson: 16, type: 'additional', points: 7},
	  ];
	
 for(let i =0;i<myLesson2.length;i++){
	 if(myLesson2[i].type=='basic'){
		 myLesson2[i].points/=2;
		 
	 }else{
		 myLesson2.splice(i,1);
		 i--;
	 }
	
 }
 console.log(myLesson2);