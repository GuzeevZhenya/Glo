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
		})
	}

	tabs();

	//Слайдер
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			// btn = document.querySelectorAll('.portfolio-btn'),
			dot = document.querySelectorAll('.dot'),
			slider = document.querySelector('.portfolio-content');
		console.log(slide);
		let currentSlide = 0;
		let interval;

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide = currentSlide < slide.length - 1 ? currentSlide + 1 : 0;
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 4000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target;
			if (target.matches('.portfolio-btn, .dot')) {
				prevSlide(slide, currentSlide, 'portfolio-item-active');
				prevSlide(dot, currentSlide, 'dot-active');

				if (target.matches('#arrow-right')) {
					currentSlide++;
				} else if (target.matches('#arrow-left')) {
					currentSlide--;
				} else if (target.matches('.dot')) {
					dot.forEach((elem, index) => {
						if (elem === target) {
							currentSlide = index;
						}
					});
				}
			}
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		})

		slider.addEventListener('mouseover', event => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				stopSlide();
			}
		});

		slider.addEventListener('mouseout', event => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlide();
			}
		});

		startSlide(4500);

	};
	// add point dot
	const addDot = () => {
		const portfolioItem = document.querySelectorAll('.portfolio-item'),
			portfolioDots = document.querySelector('.portfolio-dots');

		portfolioItem.forEach(() => {
			const dot = document.createElement('li');
			dot.classList.add('dot');
			portfolioDots.appendChild(dot);
		});

		portfolioDots.children[0].classList.add('dot-active');
	};
	addDot();
	slider();



	//Калькулятор
	const calc = (price = 100)=>{
		const calcBlock = document.querySelector('.calc-block');
		const calcType = document.querySelector('.calc-type');
		const calcSquare = document.querySelector('.calc-square');
		const calcDay = document.querySelector('.calc-day');
		calcCount = document.querySelector('.calc-count');
		totalValue = document.getElementById('total');

		const countSum = () =>{
			let total = 0;
			let countValue = 1;
			let dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value;
			let squareValue = +calcSquare.value;

			if(calcCount.value > 1){
				countValue += (calcCount.value - 1) / 10;
			}
			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}

			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			} 
			totalValue.textContent = total;
		}
		 

		calcBlock.addEventListener('change',(event)=>{
			const target = event.target;
			// 1 способ
			// if (target.matches('.calc-type') || target.matches('.calc-square') ||
			// target.matches('.calc-count') || target.matches('.calc-day')) {
			// 	console.log(1);
			// }

			// 2 способ
			// if (target === calcType || target === calcSquare || target === calcCount || target === calcDay) {
			// 	console.log(1);
			// }

			// 3 способ
			if (target.matches('select') || target.matches('input')) {
				countSum();
			}
		})
	}
	calc(100);

});