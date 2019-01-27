/******* Addresses Page Events *******/

import { CountryProvinceSelector } from '@shopify/theme-addresses';

const countryProvinceSelector = new CountryProvinceSelector(window.allCountryOptionTags);
const countrySelectors = document.querySelectorAll(".data-countries");
const provinceSelectors = document.querySelectorAll(".data-provinces");

countrySelectors.forEach((selector, index) => {
  countryProvinceSelector.build(countrySelectors[index], provinceSelectors[index]);
})