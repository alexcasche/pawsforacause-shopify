/******* Subheader *******/

const subheader = document.getElementById("subheader");

if(subheader) {
  function subheaderChange(event) {
    let link = event.target.value;
    window.location.assign(link);
  }

  const subheaderSelect = document.getElementById("subheader-select");
  subheaderSelect.addEventListener("change", subheaderChange);

  const { href, protocol, pathname, hash } = window.location;
  const absoluteUrl = href;
  const noProtocolUrl = href.replace(protocol, "");
  const relativeUrl = pathname + hash;
  const urlArray = [absoluteUrl, noProtocolUrl, relativeUrl ];

  const subheaderOptions = subheaderSelect.querySelectorAll("option");
  subheaderOptions.forEach(option => {
    if(urlArray.indexOf(option.value) > -1) {
      option.selected = "selected";
      const subheaderLabel = document.getElementById("subheader-select-label");
      subheaderLabel.textContent = option.textContent;
    }
  })

}
