/* eslint-disable */
import { initSearch } from './initSearch';

const postRequest = () => {
  fetch('https://studika.ru/api/areas', {
    method: 'POST',
  })
    .then((data) => data.json())
    .then(data => {
      // console.log(data);
      initSearch(data)
    })
    .catch(err => {
      console.log('Ошибка', err);
    })
}

export { postRequest }
