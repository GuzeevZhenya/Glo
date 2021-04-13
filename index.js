

let book = document.querySelectorAll('.book');
let books = document.querySelectorAll('.books');
let adv = document.querySelector('.adv');

console.log(book);
book[0].before(book[1]);
book[2].before(book[4]);
book[2].before(book[4]);
book[2].before(book[3]);
book[2].before(book[5]);




//Заменить картинку заднего фона на другую из папки image
let bodyBackground = document.querySelector('body');
bodyBackground.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

//справить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов'

 //Удалить рекламу со страницы
adv.remove();
 

const secondBook = book[0].querySelectorAll('li');
 
secondBook[3].appendChild(secondBook[6])
secondBook[3].appendChild(secondBook[8])
secondBook[9].appendChild(secondBook[2])


const fivesBook = book[5].querySelectorAll('li');
fivesBook[1].append(fivesBook[9]);
fivesBook[9].append(fivesBook[3]);
fivesBook[9].append(fivesBook[4]);
fivesBook[8].append(fivesBook[5]);
fivesBook[7].append(fivesBook[5]);


const sixBook = book[2].querySelectorAll('li');
 
sixBook[9].insertAdjacentHTML('afterbegin', '<li>Глава 8: За пределами ES6</li>')