class First{
  constructor(){
  }
  
  hello(){
    console.log('hello я метод родителя')
  }
}

class Second extends First{
	constructor() {
		super()
	}
	
	hellow() {
		super.hello();
		console.log('А я наследуемый метод')
	}

}

let element = new Second();
element.hellow();