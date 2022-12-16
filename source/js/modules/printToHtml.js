/* eslint-disable */


/**
 * FIXME: убрать дублирование списка
 */
const printToHtml = (regions) => {
  const regionList = document.querySelector('.region__list');
  const regionItems = document.querySelectorAll('.region__list li');

  const setRegionName = () => {
    return regions.map((region) => `
          <li>${region.name}</li>
      `);
  };

  regionList.insertAdjacentHTML('afterbegin',
    setRegionName(regions).join('')
  );

  regionItems.forEach(item => {
    item.addEventListener('click', (evt) => {
      console.log(evt.target);
    });
  });
};

export { printToHtml }
