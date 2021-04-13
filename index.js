

let books = document.querySelectorAll('.book');
let adv = document.querySelector('.adv');


//Заменить картинку заднего фона на другую из папки image
let bodyBackground = document.querySelector('body');
bodyBackground.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

//справить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
books[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов'

//Удалить рекламу со страницы

adv.remove();