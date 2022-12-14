/* eslint-disable */

window.addEventListener('DOMContentLoaded', () => {
    // Modules

    // ---------------------------------
    const main = document.querySelector('.main');
    const searchInput = document.querySelector('.input');

    //запрос на сервер - в ответе массив регионов
    const postRequest = () => {
        fetch('https://studika.ru/api/areas', {
            method: 'POST',
        })
            .then(data => data.json())
            .then(data => {
                getSearch(data)
            })
            .catch(err => {
                console.log('Ошибка', err);
            })
    }
    postRequest();

    //распечатывает названия регионов в main
    const printToHtml = (regions) => {
        main.insertAdjacentHTML('afterbegin', `
            <ul class="list">${setRegionName(regions).join('')}</ul>
        `
        );
    }

    //перебирает массив с регионами и возвращает название каждого
    const setRegionName = (regions) => {
        return regions.map(region => `
            <li>${region.name}</li>
        `);
    }

    const getSearch = (data) => {
        printToHtml(data);

        searchInput.addEventListener('input', (evt) => {
            let value = evt.target.value.trim();
            const liItems = document.querySelectorAll('.list li');

            if (value !== 0) {
                liItems.forEach(item => {
                    if (item.innerText.toLowerCase().search(value) == -1) {
                        item.classList.add('hide');
                    }
                    else {
                        item.classList.remove('hide');
                    }
                })
            }
            else {
                liItems.forEach(item => {
                    item.classList.remove('hide');
                });
            }
        });

    }


    window.addEventListener('load', () => { });
});
