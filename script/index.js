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

	let body = document.querySelector('body');
	const toggleMenu = (e) => {
		const menu = document.querySelector('menu');
		const anhors = document.querySelectorAll('.scroll-link');
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

		const handleMenu = (e) => {
			let target = e.target;
			if (menu.classList.contains('active-menu')) {
				if (target.closest('.menu')) {
					menu.classList.toggle('active-menu');
				} else if (target !== menu && target.closest(('[href^="#"]'))) {
					menu.classList.toggle('active-menu');
					
				} else {
					if (!target.closest('menu')) {
						menu.classList.toggle('active-menu');
					}
				}
			} else if (target.closest('.menu')) {
				menu.classList.toggle('active-menu');
			}
		}
		body.addEventListener('click', handleMenu);
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