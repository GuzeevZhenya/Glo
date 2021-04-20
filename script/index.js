// function test(...arr) {
// 	console.log(arr);
// }

// test('red', 6, 12, 'black', [], true, 9)


// const arr = ['red', 5, 12];
// const [a, b, c] = arr;
// console.log(a, b, c);

// const createCar = ({ brand='bmw', model=6, color='black',colorInt}) => {
// 	console.log(`Запущенно производство автомобиля ${brand} ${model}
// 	Цвет кузова:${color},
// 	цвет салона ${colorInt}
							
// 	`)
// };

// createCar({
// 	brand: 'Mazda',
// 	model: 3,
// 	color: 'blue',
// 	colorInt: 'black'
// });

// const cars = ['mazda', 'bmw', 'audi'];
// const [a1, b2, c3] = cars;

const carsModel = {
	brand: 'Volvo',
	models: {
		sedan: ['s60','s90'],
		cross: ['v60', 'v90'],
	}
}

const { models: { sedan: [s1, s2], cross: [c1, c2] } } = carsModel;
console.log(s1,s2,c1,c2)

const car = 'btr';
const cycle = 'bmx';
const bike = 'honda';

const transport = {
	car, cycle, bike,
	ride:() {
		console.log('go ride');
	}
}

const transport = {
	bike: 'honda',
	car: 'bmw',
	cycle: 'bmx',
}
const newTransport = {
	bike:'suziki',
	quadBike:'polaris'
}

Object.assign(transport, newTransport);
const currentTransport = Object.assign({}, transport);
const currentTrans = { ...transport, ...newTransport };

const map = new Map();
map.set('car', { brand: 'mazda', model: 3 });
console.log(map);