"use strict";
const validation = () => {
    const inputs = document.getElementById('calc').querySelectorAll('input');
    const message = document.querySelector('.mess');
    const topForms = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const formsEmail = document.querySelectorAll('input[type="email"]');
    const formsTel = document.querySelectorAll('input[type="tel"]');

    message.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яё0-9 ,.]/gi, '');
    });

    topForms.forEach(input => {
        input.addEventListener('blur', (event) => {
            if (event.target.value.length > 1) {
                let reg = event.target.value.replace(/[^а-яё ]/gi, '');
                event.target.value = reg;
            } else {
                event.target.value = '';
            }
        });

    });

    formsEmail.forEach(input => {
        input.setAttribute('required', true);
        input.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[а-яё0-9/, +=)({&$%#^:;?`<>№|\\})]/gi, "");
        });
    });

    formsTel.forEach(input => {
        input.addEventListener('blur', (event) => {
            if (event.target.value.length > 5 && event.target.value.length < 16) {
                event.target.value = event.target.value.replace(/[^+\d\()]/g, '');
            } else {
                event.target.value = '';
            }
        });
    });

    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/\D+/, "");
        });
    });
};

export default validation;

