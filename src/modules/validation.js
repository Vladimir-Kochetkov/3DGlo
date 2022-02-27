"use strict";
const validation = () => {
    const inputs = document.getElementById('calc').querySelectorAll('input');
    const message = document.querySelector('.mess');
    const topForms = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const formsEmail = document.querySelectorAll('input[type="email"]');
    const formsTel = document.querySelectorAll('input[type="tel"]');

    message.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[a-z0-9/.,+=_)({*&$%#@'"!~^:;?`<>№|\\})]/gi, "");
    });

    topForms.forEach(input => {
        input.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[a-z0-9/.,+=_)({*&$%#@'"!~^:;?`<>№|\\})]/gi, "");
        });
    });

    formsEmail.forEach(input => {
        input.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[а-яё0-9/, +=)({&$%#^:;?`<>№|\\})]/gi, "");
        });
    });

    formsTel.forEach(input => {
        input.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[а-яёa-z/, +=_~{!*&$%#'."^:;?`<>№|\][\\}]/gi, "");
        });
    });

    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/\D+/, "");
        });
    });
};

export default validation;

