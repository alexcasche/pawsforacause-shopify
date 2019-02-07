/******* Login Page Events *******/

if(window.location.href.indexOf("account/login") > -1) {
  const loginForm =  document.getElementById("loginForm");
  const recoverForm = document.getElementById("recoverForm");
  const heading = document.getElementById("loginHeading");

  function hideErrors() {
    const errors = document.querySelectorAll(".c-auth__errors > .errors")
    if(errors) {
      errors.forEach(error => error.parentNode.removeChild(error));
    }
  }
  function showLogin() {
    heading.textContent = "Welcome Back!";
    loginForm.classList.remove("u-hidden");
    recoverForm.classList.add("u-hidden");
  }
  function showRecover() {
    heading.textContent = "Reset Password";
    loginForm.classList.add("u-hidden");
    recoverForm.classList.remove("u-hidden");
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
}

