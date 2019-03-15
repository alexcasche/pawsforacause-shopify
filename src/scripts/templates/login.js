/******* Login *******/

const customerLogin =  document.getElementById("customerLogin");
const customerRecover = document.getElementById("customerRecover");

function hideErrors() {
  const errors = document.querySelectorAll(".c-formCustomer__errors > .errors")
  if(errors) {
    errors.forEach(error => error.parentNode.removeChild(error));
  }
}
function showLogin() {
  customerLogin.classList.remove("u-hidden");
  customerRecover.classList.add("u-hidden");
}
function showRecover() {
  customerLogin.classList.add("u-hidden");
  customerRecover.classList.remove("u-hidden");
}
if(window.location.href.indexOf("#recover") > -1) {
  showRecover()
}
const loginTrigger = document.querySelector(".trigger-login-form");
loginTrigger.addEventListener("click", () => {
  hideErrors();
  showLogin();
});
const recoverTrigger = document.querySelector(".trigger-recover-form");
recoverTrigger.addEventListener("click", () => {
  hideErrors()
  showRecover();
});

