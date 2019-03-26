/******* Navbar *******/

const navbar = document.getElementById("navbar");

if(navbar) {
  function navbarChange(event) {
    let link = event.target.value;
    window.location.href = link;
  }

  const navbarSelect = document.getElementById("navbar-select");
  navbarSelect.addEventListener("change", navbarChange);

  const { href, protocol, pathname, hash } = window.location;
  const absoluteUrl = href;
  const noProtocolUrl = href.replace(protocol, "");
  const relativeUrl = pathname + hash;
  const urlArray = [absoluteUrl, noProtocolUrl, relativeUrl ];

  const navbarOptions = navbarSelect.querySelectorAll("option");
  navbarOptions.forEach(option => {
    if(urlArray.indexOf(option.value) > -1) {
      option.selected = "selected";
      const navbarLabel = document.getElementById("navbar-select-label");
      navbarLabel.textContent = option.textContent;
    }
  })
}
