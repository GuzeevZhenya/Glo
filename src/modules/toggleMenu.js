const toggleMenu = (e) => {
    let body = document.querySelector('body');
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

export default toggleMenu;