/* eslint-disable */

window.addEventListener('DOMContentLoaded', () => {
  // Modules

  // ---------------------------------
  const searchInput = document.querySelector('.input');
  const regionList = document.querySelector('.region__list');

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
    regionList.insertAdjacentHTML('afterbegin',
      setRegionName(regions).join('')
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
            item.innerHTML = item.innerText;
          }
          else {
            item.classList.remove('hide');
            let str = item.innerText;
            item.innerHTML = insertMark(str, item.innerText.toLowerCase().search(value), value.length);
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

  function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<strong>' + string.slice(pos, pos + len) + '</strong>' + string.slice(pos + len);
  }

  window.addEventListener('load', () => { });
});
