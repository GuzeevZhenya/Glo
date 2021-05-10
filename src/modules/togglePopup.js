//popup
function togglePopup(e) {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupContent = document.querySelector('.popup-content');
    //Данные для анимации
    let popupData = {
        count: -445,
        speed: 20,
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
    for(let i =1;i<popupBtn.length;i++){
        popupBtn[i].style.display = 'none';
    }


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

export default togglePopup;