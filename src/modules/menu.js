"use strict";
const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const anchors = menu.querySelectorAll('a[href*="#"]');
    console.log(anchors);

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            handleMenu();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    menuBtn.addEventListener('click', handleMenu);
};

export default menu;