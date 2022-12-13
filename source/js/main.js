/* eslint-disable */

window.addEventListener('DOMContentLoaded', () => {
    // Modules

    // ---------------------------------
    const main = document.querySelector('.main');

    const generateHtml = (data) => {
        data.map((item) => {
            console.log(item.name);
        })
    };



    const postRequest = () => {
        fetch('https://studika.ru/api/areas', {
            method: 'POST',
        })
            .then(data => data.json())
            .then(data => {
                generateHtml(data)
            })
            .catch(err => {
                console.log('Ошибка', err);
            })
    }
    postRequest();



    window.addEventListener('load', () => { });
});
