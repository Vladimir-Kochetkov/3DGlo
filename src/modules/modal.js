import { animate } from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const content = document.querySelector('.popup-content');
    const modalData = {
        start: -445,
        end: 0,
        count: -600,
        speed: 3
    };

    const showModal = () => {
        modalData.start > modalData.end ?
            modalData.count -= modalData.speed :
            modalData.count += modalData.speed;
        content.style.transform = `translateY(${modalData.count}px)`;

        if (modalData.start > modalData.end ?
            modalData.count > modalData.end :
            modalData.count < modalData.end) {
            requestAnimationFrame(showModal);
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (window.screen.width > 768) {
                modalData.count = modalData.start;
                requestAnimationFrame(showModal);
            }
        });
    });

    modal.addEventListener('click', (e) => {
        modal.style.display = 'none';
    });
};


export default modal;