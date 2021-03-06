/******* Header *******/

function toggleNavAccount(event) {
  event.stopPropagation()
  const navAccount = document.getElementById("navAccount");
  navAccount.classList.toggle('u-visible');
}
const navTriggers = document.querySelectorAll(".trigger-nav-account");
navTriggers.forEach(trigger => trigger.addEventListener('click', toggleNavAccount));

function toggleSearch(event) {
  event.stopPropagation()
  const searchHeader = document.getElementById("headerSearch");
  const sidemenu = document.getElementById("sidemenu");
  sidemenu.classList.toggle("search-visible");
  searchHeader.classList.toggle('u-hidden');
  const searchInput = searchHeader.querySelector(".c-formSearch__input")
  if(!searchHeader.classList.contains('u-hidden')) {
    searchInput.focus()
  } else {
    searchInput.blur()
  }
}
const searchTriggers = document.querySelectorAll(".trigger-search");
searchTriggers.forEach(trigger => trigger.addEventListener('click', toggleSearch));


window.addEventListener("click", () => {
  const navAccount = document.getElementById("navAccount");
  navAccount.classList.remove("u-visible")
})
window.addEventListener("resize", () => {
  if(window.innerWidth < 768) {
    const navAccount = document.getElementById("navAccount");
    navAccount.classList.remove("u-visible")
  }
});
window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const offsetTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  const header = document.getElementById("header");
  if(offsetTop >= 80) {
    header.classList.add("is-fixed");
  } else {
    header.classList.remove("is-fixed")
  }
});