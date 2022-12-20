/* eslint-disable */

const printToHtml = (regions) => {
  const regionList = document.querySelector('.region__list');
  const regionActive = document.querySelector('.region__active');
  const span = document.querySelector('.region__header-span');
  const button = document.querySelector('.button');

  const setRegionName = () => {
    return regions.map((region) => `
          <li>
          ${region.name}
          </li>
          <ul>
          ${setCityName(region.cities, region.name)}
          </ul>
      `);
  };

  const setCityName = (cities, name) => {
    if (!cities) return ''
    return cities.map((city) => `
    <li>
        ${city.name}
        <p class="small">${name}</p>
    </li>
      `).join('');
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
        return currentRegion.map((item) =>
          `
        <li class="region__active-li">
        ${item.innerHTML}
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

      const regionActiveP = document.querySelectorAll('.region__active-li p');
      regionActiveP.forEach(item => {
        item.remove();
      })

    });
  });

  button.addEventListener('click', () => {
    span.innerText = '';
    span.innerText = (currentRegionText.length > 0 ? currentRegionText : 'Любой регион');
  })

};

export { printToHtml }
