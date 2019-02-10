/******* Click Events *******/

function toggleNavAccount(event) {
  event.stopPropagation()
  const navAccount = document.getElementById("nav-account");
  navAccount.classList.toggle('u-visible');
}

const navTriggers = document.querySelectorAll(".trigger-nav-account");
navTriggers.forEach(trigger => trigger.addEventListener('click', toggleNavAccount));


/******* Window Events *******/

window.addEventListener("click", () => {
  const navAccount = document.getElementById("nav-account");
  navAccount.classList.remove("u-visible")
})


window.addEventListener("resize", () => {
  if(window.innerWidth < 768) {
    const navAccount = document.getElementById("nav-account");
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