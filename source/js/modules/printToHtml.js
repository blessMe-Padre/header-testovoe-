/* eslint-disable */

const printToHtml = (regions) => {
  const regionList = document.querySelector('.region__list');
  const regionActive = document.querySelector('.region__active');
  const span = document.querySelector('.region__header-span');
  const button = document.querySelector('.button');


  const setRegionName = () => {
    return regions.map((region) => `
          <li>${region.name}</li>
      `);
  };

  regionList.insertAdjacentHTML('afterbegin',
    setRegionName(regions).join('')
  );

  /**
   * FIXME: исправить дублирование массива
   */


  const regionItems = document.querySelectorAll('.region__list li');

  let currentRegion = [];

  regionItems.forEach(item => {
    item.addEventListener('click', (evt) => {
      let arr = [];
      arr.push(evt.target);

      arr.forEach(item => {
        currentRegion.push(item.innerText)
      })

      const setRegionActiveName = () => {
        return arr.map((item) => `
        <li>${item.innerText}</li>`);
      };

      regionActive.insertAdjacentHTML('afterbegin',
        setRegionActiveName().join(''));
    });

    button.addEventListener('click', () => {
      span.innerText = currentRegion;
    })

  });
};

export { printToHtml }
