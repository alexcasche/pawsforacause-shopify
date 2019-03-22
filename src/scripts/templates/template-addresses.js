/******* Addresses *******/

import { CountryProvinceSelector } from '@shopify/theme-addresses';

function buildSelects() {
  const addressCountryProvinceSelector = new CountryProvinceSelector(window.theme.allCountryOptionTags);
  const countrySelects = document.querySelectorAll(".data-countries");
  const provinceSelects = document.querySelectorAll(".data-provinces");
  countrySelects.forEach((selects, index) => {
    addressCountryProvinceSelector.build(countrySelects[index], provinceSelects[index]);
  })
}

const readyInterval = setInterval(() => {
  const modalLoaded = document.getElementById("modal");
  if(modalLoaded) {
    buildSelects();
    clearInterval(readyInterval);
  }
}, 250)