/* eslint-disable */
import { initSearch } from './initSearch';

const postRequest = () => {
  fetch('https://studika.ru/api/areas', {
    method: 'POST',
  })
    .then((data) => {
      return data.json();
    })
    .then(data => {
      initSearch(data)
    })
    .catch(err => {
      console.log('Ошибка', err);
    })
}
postRequest();

export { postRequest }
