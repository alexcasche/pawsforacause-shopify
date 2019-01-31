import Cookies from 'universal-cookie';
const windowAddress = window.Site.defaultAddress;
const googleUrl = "https://maps.googleapis.com/maps/api/staticmap";
const googleKey = "&key=AIzaSyD-8X1D8u6v43jwi1D0Nhgo-xXU5l3Prg8";
const googleParams = "&zoom=15&size=640x640&scale=2"

if(windowAddress) {
  const formattedAddress = windowAddress.replace(/ /g, "+");
  const googleAddress = `?center=${formattedAddress}`;
  const googleMarker = `&markers=color:red%7Clabel:%7C${formattedAddress}`;
  const map = new Image();
  const mapContainer = document.getElementById("googleMap");
  const mapLoading = document.getElementById("googleMapLoading");
  // map.classList.add("c-addresses__mapImage");
  // map.src = `${googleUrl}${googleAddress}${googleParams}${googleMarker}${googleKey}`;
  // let loadingComplete = false;
  // map.onload = () => {
  //   loadingComplete = true;
  //   mapLoading.remove();
  //   mapContainer.appendChild(map);
  // }
//   setTimeout(() => {
//     if(!loadingComplete) {
//       mapLoading.remove();
//     }
//     mapContainer.querySelector()
// }, 5000);
}

