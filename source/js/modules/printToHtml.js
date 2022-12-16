/* eslint-disable */
const printToHtml = (regions) => {
  const regionList = document.querySelector('.region__list');

  const setRegionName = (regions) => {
    return regions.map((region) => `
          <li>${region.name}</li>
      `);
  }
  regionList.insertAdjacentHTML('afterbegin',
    setRegionName(regions).join('')
  );
};

export { printToHtml }
