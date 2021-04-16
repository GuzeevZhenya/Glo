// let car = {
// 	doors: 4,
// 	turbo: false,
// 	ride: function () {
// 		console.log('car ride')
// 	}
// };

// let newCar = Object.create(car);
// newCar.model = 'mazda';
// console.log(newCar.doors);

// console.log(newCar.hasOwnProperty('door'));

// console.log(car.isPrototypeOf(newCar));

function Car() {
	this.model = 'mazda';
}

let car1 = new Car();