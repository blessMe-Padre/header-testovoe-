/* eslint-disable */

const printToHtml = (regions) => {
  const regionList = document.querySelector('.region__list');
  const regionActive = document.querySelector('.region__active');

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

  regionItems.forEach(item => {
    item.addEventListener('click', (evt) => {
      let arr = [];
      arr.push(evt.target);
      console.log(arr);

      const setRegionActiveName = () => {
        return arr.map((item) => `
        <li>${item.innerText}</li>`);
      };

      regionActive.insertAdjacentHTML('afterbegin',
        setRegionActiveName().join(''));
    });


  });
};

export { printToHtml }
