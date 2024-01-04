const form = document.querySelector('form');
const input = document.querySelector('input');
const image = document.querySelector('img');
const size = document.querySelector('#size');

const getQR = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`);
    image.setAttribute('src', response.url);
    
    form.reset();
}

form.addEventListener("submit", getQR);