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

const windowAddress = window.theme.customer.defaultAddress;
const googleUrl = "https://maps.googleapis.com/maps/api/staticmap";
const googleKey = "&key=AIzaSyD-8X1D8u6v43jwi1D0Nhgo-xXU5l3Prg8";
const googleParams = "&zoom=15&size=640x640&scale=2"

if(windowAddress) {
  const formattedAddress = windowAddress.replace(/ /g, "+");
  const googleAddress = `?center=${formattedAddress}`;
  const googleMarker = `&markers=color:red%7Clabel:%7C${formattedAddress}`;
  const mapContainer = document.getElementById("googleMap");
  const mapLoading = document.getElementById("googleMapLoading");
  const map = new Image();
  map.classList.add("c-addresses__mapImage");
  map.src = `asdasdas${googleUrl}${googleAddress}${googleParams}${googleMarker}${googleKey}`;
  let loadingComplete = false;
  map.onload = () => {
    loadingComplete = true;
    mapLoading.classList.add("u-hidden");
    mapContainer.classList.remove("u-hidden")
    mapContainer.innerhHTML = "";
    mapContainer.appendChild(map);
  }
  setTimeout(() => {
    if(!loadingComplete) {
      mapLoading.classList.add("u-hidden");
      mapContainer.classList.remove("u-hidden")
    }
  }, 2500);
}