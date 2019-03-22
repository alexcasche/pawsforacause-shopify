/******* Sidemenu *******/

function toggleSidemenu() {
  document.body.classList.toggle("sidemenu-open");
  document.getElementById("sidemenu").classList.toggle("is-open");
  document.body.classList.toggle("u-noScroll");
  const menuButtons = document.querySelectorAll(".trigger-sidemenu");
  menuButtons.forEach(button => button.classList.toggle("u-hidden"));
  const secondaryMenus = document.querySelectorAll(".c-sidemenu__secondary");
  secondaryMenus.forEach(menu => menu.classList.remove("is-open"));
}
const sidemenuTriggers = document.querySelectorAll(".trigger-sidemenu");
sidemenuTriggers.forEach(trigger => trigger.addEventListener("click", toggleSidemenu));

function toggleSidemenuSecondary(event) {
  const index = event.target.dataset.index;
  document.querySelectorAll(".c-sidemenu__secondary")[index].classList.toggle("is-open")
}
const sidemenuSecondaryTriggers = document.querySelectorAll(".trigger-sidemenu-secondary");
sidemenuSecondaryTriggers.forEach(trigger => trigger.addEventListener("click", toggleSidemenuSecondary));


window.addEventListener("resize", () => {
  if(window.innerWidth > 767) {
    const sidemenu = document.getElementById("sidemenu");
    if(sidemenu.classList.contains("is-open")) {
      toggleSidemenu()
    }
  }
});

