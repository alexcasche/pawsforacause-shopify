/******* Header *******/

function toggleNavAccount(event) {
  event.stopPropagation()
  const navAccount = document.getElementById("navAccount");
  navAccount.classList.toggle('u-visible');
}
const navTriggers = document.querySelectorAll(".trigger-nav-account");
navTriggers.forEach(trigger => trigger.addEventListener('click', toggleNavAccount));

function openSearch(event) {
  event.stopPropagation()
  const searchHeader = document.getElementById("headerSearch");
  searchHeader.classList.remove('u-hidden');
}
const openSearchTriggers = document.querySelectorAll(".trigger-search-open");
openSearchTriggers.forEach(trigger => trigger.addEventListener('click', openSearch));

function closeSearch(event) {
  event.stopPropagation()
  const searchHeader = document.getElementById("headerSearch");
  searchHeader.classList.add('u-hidden');
}
const closeSearchTriggers = document.querySelectorAll(".trigger-search-close");
closeSearchTriggers.forEach(trigger => trigger.addEventListener('click', closeSearch));


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
  const headerNav = document.getElementById("headerNav");
  if(offsetTop >= 80) {
    headerNav.classList.add("is-fixed");
  } else {
    headerNav.classList.remove("is-fixed")
  }
});