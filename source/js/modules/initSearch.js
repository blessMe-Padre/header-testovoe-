/* eslint-disable */
import { printToHtml } from './printToHtml';
import { insertMark } from './insertMark';

const initSearch = (data) => {
  const searchInput = document.querySelector('.input');
  printToHtml(data);

  searchInput.addEventListener('input', (evt) => {
    let value = evt.target.value.trim();
    const liItems = document.querySelectorAll('.region__list li');

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

};

export { initSearch }
