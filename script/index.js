class DomElement {
	constructor(selector, height, width, bg, fontSize,text) {
		this.selector = selector;
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.text = text;
	}



	getSelector() {
		let body = document.querySelector('body');
		let newElement;
		console.log(this.selector)
		if (this.selector.startsWith('.')) {
			newElement = document.createElement('div');
			newElement.classList.add(this.selector);
			body.append(newElement);
		}
		else if (this.selector.startsWith('#')){
			newElement = document.createElement('p');
			newElement.classList.add(this.selector);
			body.append(newElement);
		}
		newElement.style.cssText = `
			height:${this.height}px;
			width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;
		`
		newElement.innerHTML = this.text
	}

 


}

let element = new DomElement('.input', 100, 100, 'red', 20,'hi world');
element.getSelector();
let paragrf = new DomElement('#paragraf', 40, 200, 'blue', 40,'hello');
paragrf.getSelector();