window.addEventListener('DOMContentLoaded', () => {

	const calcInputs = document.querySelectorAll('input.calc-item'),
		formName = document.querySelectorAll('[name=user_name]'),
		formMessage = document.querySelectorAll('[name=user_message]'),
		formEmail = document.querySelectorAll('[name=user_email]'),
		formPhone = document.querySelectorAll('[name=user_phone]');

	const validateNumberInputs = () => {
		calcInputs.forEach(el => {
			el.value = el.value.replace(/[^\d]/g, '');
		})
	};

	const inputsHandler = (e) => {
		if (e.target.matches('.calc-item')) {
			validateNumberInputs();
		}
		if (e.target.matches('[name=user_name]')) {
			e.target.value = e.target.value.replace(/[^а-яё\-\ ]/gi, '');
		}
		if (e.target.matches('#form2-message')) {
			e.target.value = e.target.value.replace(/[^а-яё0-9\.\,\:\-\!\?\ ]/gi, '');
		}
		if (e.target.matches('[name=user_email]')) {
			e.target.value = e.target.value.replace(/[^a-z\@\_\-\.\!\~\*\']/gi, '');
		}
		if (e.target.matches('[name=user_phone]')) {
			e.target.value = e.target.value.replace(/[^\d\(\)\-\+]/g, '');
			if (e.target.value.length > 10) {
				e.target.value = e.target.value.substring(0, 11)
			}
		}
	}

	const trim = (input) => {
		input.value = input.value.replace(/\s+/g, ' ');
		input.value = input.value.replace(/\-+/g, '-');

		let inputToExp = new RegExp("ReGeX" + input.value + "ReGeX");
		if (/^[/ /-]/.test(inputToExp)) {
			input.value = input.value.replace(/^[/ /-]/, '')
		}
		if (/[/ /-]$/.test(inputToExp)) {
			input.value = input.value.replace(/[/ /-]$/, '')
		}
	}

	const capitalize = (input) => {
		let inputValue = input.value
		return inputValue.split(' ').map(item =>
			item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
	}

	const controlInputs = (input, exp) => {
		if (!input.value.match(exp)) {
			input.value = '';
		}
	}

	formName.forEach(el => {
		el.addEventListener('blur', () => {
			trim(el);
			el.value = capitalize(el);
			controlInputs(el, /[а-яё]{2,}/gi);
		})
	})

	formMessage.forEach(el => {
		el.addEventListener('blur', () => {
			controlInputs(el, /[а-яё0-9\.\,\:\-\!\?\ ]/gi);
			trim(el);
		})
	})

	formEmail.forEach(el => {
		el.required = true;
		el.addEventListener('blur', () => {
			trim(el);
			controlInputs(el, /\w+@\w+\.\w{2,3}/g);
		})
	})

	formPhone.forEach(el => {
		el.addEventListener('blur', () => {
			trim(el);
			controlInputs(el, /\+?([-()]*\d){7,}/g);
		})
	})

	window.addEventListener('input', inputsHandler);

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
});