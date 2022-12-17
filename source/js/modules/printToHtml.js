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

  const regionItems = document.querySelectorAll('.region__list li');

  let currentRegion = [];
  let currentRegionText = [];

  regionItems.forEach(item => {
    item.addEventListener('click', (evt) => {
      evt.stopPropagation();
      let arr = [];
      arr.push(evt.target);

      arr.forEach(item => {
        currentRegion.push(item)
        currentRegionText.push(item.innerText)
      });

      const setRegionActiveName = () => {
        return currentRegion.map((item) => `
        <li>${item.innerText}
          <button class="btn-remove">X</button>
        </li>`);
      };

      regionActive.innerHTML = '';
      regionActive.insertAdjacentHTML('afterbegin',
        setRegionActiveName().join(''));

      const removeBtn = document.querySelectorAll('.btn-remove');
      removeBtn.forEach(button => {
        button.addEventListener('click', (evt) => {
          evt.stopPropagation();
          currentRegion.splice(button.parentNode, 1);
          currentRegionText.splice(button.parentNode, 1);
          regionActive.removeChild(button.parentNode);
        })
      })

    });
  });

  button.addEventListener('click', () => {
    span.innerText = '';
    span.innerText = (currentRegionText.length > 0 ? currentRegionText : 'Любой регион');
  })

};

export { printToHtml }
