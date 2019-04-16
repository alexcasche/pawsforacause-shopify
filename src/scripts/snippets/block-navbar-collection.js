/******* Navbar Collection *******/

const navbar = document.getElementById("navbar");
const urlParams = new URLSearchParams(window.location.search);

if(navbar) {
  selectInit("sort")
  selectInit("filter")
}

function selectInit(type) {
  const select = document.getElementById(`navbar-${type}`)
  const label = document.getElementById(`navbar-${type}-label`)
  const param = urlParams.get(type);
  if(param) {
    const options = [...select.options]
    const activeOption = options.find(option => option.value === param)
    const activeIndex = activeOption ? options.indexOf(activeOption) : 0
    select.selectedIndex = activeIndex
    label.textContent = activeOption.value.replace("-", " ")
  }
  select.addEventListener("change", function(event) {
    selectChange(event, type, select, label)
  })
}
function selectChange(event, type, select, label) {
  const value = event.target.value
  const activeOption = select.options[select.selectedIndex]
  if(value === "false") {
    urlParams.delete(type)
  } else {
    urlParams.set(type, value)
  }
  if([...urlParams.entries()].length > 0) {
    window.history.pushState({} , document.title, `${window.location.pathname}?${urlParams}`);
  } else {
    window.history.pushState({} , document.title, window.location.pathname)
  }
  label.textContent = activeOption.textContent
}
