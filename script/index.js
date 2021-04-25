// // let getMessage = function (name) {
// //   console.log('hi world');
// // }

// // setTimeout(function () {
// //   console.log('erger')
// // }, 3000)


// // let idInterval = setInterval(getMessage, 2000, 'vasia');
// // let idSetTimeout = setTimeout(getMessage, 4000, 'anton');
// // clearInterval(idInterval);

// // const spanch = document.querySelector('.spanch');
// // const limur = document.querySelector('.limur');
// // let count = 0;
// // let flyInterval;

// // const flyAnimate = function() {
// //     flyInterval = requestAnimationFrame(flyAnimate);
// //     count++;

// //     if (count < 350) {
// //         spanch.style.left = count + 'px';
// //         limur.style.top = count + 'px';
// //     } else if (count < 500) {
// //         limur.style.top = count + 'px';
// //     } else {
// //         cancelAnimationFrame(flyInterval);
// //     }
// //     console.log(count);
// // };

// // let animate = false;

// // document.addEventListener('click', () => {
// //     if (animate) {
// //         flyInterval = requestAnimationFrame(flyAnimate);
// //         animate = false;
// //     } else {
// //         animate = true;
// //         cancelAnimationFrame(flyInterval);
// //     }

// // });
// // // let limurRun = function () {
// // //   count++;
// // //   limur.style.top = count + 'px';
// // //   if (count < 350) {
// // //     setTimeout(limurRun, 20);
// // //   }

// // // }

const date = new Date();

window.addEventListener('DOMContentLoaded', () => {

	//Timer
	function countTimer(deadline) {
		let timerHours = document.querySelector('#timer-hours');
		let timerMinuts = document.querySelector('#timer-minutes');
		let timerSeconds = document.querySelector('#timer-seconds');

		// Получаем конечную дату
		function getTimeRemaining() {
			let dateStop = new Date(deadline).getTime();
			let dateNow = new Date().getTime();
			let timeRemaining = (dateStop - dateNow) / 1000;
			let seconds = Math.floor(timeRemaining % 60);
			let minuts = Math.floor((timeRemaining / 60) % 60);
			let hours = Math.floor(timeRemaining / 60 / 60) % 24;
			let day = Math.floor(timeRemaining / 60 / 60 / 24);
			return {
				hours,
				minuts,
				seconds,
				timeRemaining
			};
		}

		function updateClock() {
			let timer = getTimeRemaining();
			if (timer.timeRemaining > 0) {
				timerHours.textContent = addZero(timer.hours);
				timerMinuts.textContent = addZero(timer.minuts);
				timerSeconds.textContent = addZero(timer.seconds);
			} else {
				timerHours.textContent = '00';
				timerMinuts.textContent = '00';
				timerSeconds.textContent = '00';
				clearInterval(interval);
			}
		}

		//Добавление 0
		function addZero(n) {
			return (parseInt(n, 10) < 10 ? '0' : '') + n;
		}
		let interval = setInterval(updateClock, 1000);
	}
	countTimer('31 april 2021');


	//Меню
	// const toggleMenu = (e) => {
	// 	const btnMenu = document.querySelector('.menu');
	// 	const menu = document.querySelector('menu');
	// 	let closeBtn = document.querySelector('.close-btn');
	// 	let menuItem = menu.querySelectorAll('ul>li');
	// 	const anhors = document.querySelectorAll('.scroll-link')
	// 	//  Плавная прокрутка
	// 	anhors.forEach(item => {
	// 		item.addEventListener('click', (e) => {
	// 			e.preventDefault();
	// 			const blockID = item.getAttribute('href');
	// 			document.querySelector('' + blockID).scrollIntoView({
	// 				behavior: "smooth",
	// 				block: "start",
	// 			})
	// 		})
	// 	})

		const toggleMenu = (e) => {
		const btnMenu = document.querySelector('.menu');
		const menu = document.querySelector('menu');
		let closeBtn = document.querySelector('.close-btn');
		let menuItem = menu.querySelectorAll('ul>li');
		const anhors = document.querySelectorAll('.scroll-link')
		//  Плавная прокрутка
		anhors.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				const blockID = item.getAttribute('href');
				document.querySelector('' + blockID).scrollIntoView({
					behavior: "smooth",
					block: "start",
				})
			})
		})

		const handleMenu = (e)=>{
			let target = e.target;
			console.log(target);
			if(target.closest('.menu')){
				menu.classList.toggle('active-menu');
			}else if(target !== menu && target.closest(('[href^="#"]'))){
				menu.classList.toggle('active-menu');
				//Возможно тут ошибка
			}else {
				target = target.closest('menu');
				if (!target) {
					menu.style.display = 'none';
				}
			}
			 
		
		}

	 

		btnMenu.addEventListener('click', handleMenu)
		menu.addEventListener('click', handleMenu);

		// closeBtn.addEventListener('click', () => {
		// 	actionMenu();
		// })

		// menuItem.forEach(element => {
		// 	element.addEventListener('click', actionMenu);
		// });

	};
	toggleMenu();

	//popup
	function togglePopup(e) {
		const popup = document.querySelector('.popup');
		const popupBtn = document.querySelectorAll('.popup-btn');
		const popupContent = document.querySelector('.popup-content');
		//Данные для анимации
		popupData = {
			count: -445,
			speed: 10,
			startPos: -445,
			endPos: 0
		};
		//Сама аницамия 
		const showPopup = () => {
			popupData.startPos > popupData.endPos ?
				popupData.count -= popupData.speed :
				popupData.count += popupData.speed;
			popupContent.style.transform = `translateY(${popupData.count}px)`;
			if (popupData.startPos > popupData.endPos ?
				popupData.count > popupData.endPos :
				popupData.count < popupData.endPos) {
				requestAnimationFrame(showPopup);
			}
		};

		popupBtn.forEach((item) => {
			item.addEventListener('click', () => {
				popup.style.display = 'block';
				//отключение анимации на мобилках
				if (screen.width > 768) {
					popupData.count = popupData.startPos;
					requestAnimationFrame(showPopup);
					// AnimationInterval = requestAnimationFrame(animationPopup);
				}
			})
		})

		//Если нажимаем мимо формы, то закрываем попап
		popup.addEventListener('click', (e) => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
				popup.style.display = 'none';
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popup.style.display = 'none';
				}
			}
		})

		//const 
		// animationPopup = () => {

		// 	AnimationInterval = requestAnimationFrame(animationPopup);
		// 	count++;
		// 	if (count < 60) {
		// 		popupContent.style.top = count * 3 + 'px';
		// 	} else {
		// 		cancelAnimationFrame(AnimationInterval);
		// 	}
		// }; 
	}

	togglePopup()

	//Табы
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};

		tabHeader.addEventListener('click', (event) => {
			let target = event.target;
			target = target.closest('.service-header-tab');
			//Проверка если мы попали не по элементу а по спану
			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				})
			}
			//Задаем для спана класс родителя
		})
	}

	tabs();
});