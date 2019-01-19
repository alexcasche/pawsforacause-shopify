/******* Click Events *******/

function toggleMenuAccount(event) {
  event.stopPropagation()
  const menuAccount = document.getElementById("menu-account");
  menuAccount.classList.toggle('u-visible');
}

const menuTriggers = document.querySelectorAll(".trigger-menu-account");
menuTriggers.forEach(trigger => trigger.addEventListener('click', toggleMenuAccount));


/******* Window Events *******/

window.addEventListener("click", () => {
  const menuAccount = document.getElementById("menu-account");
  menuAccount.classList.remove("u-visible")
})


window.addEventListener("resize", () => {
  if(window.innerWidth < 768) {
    const menuAccount = document.getElementById("menu-account");
    menuAccount.classList.remove("u-visible")
  }
});