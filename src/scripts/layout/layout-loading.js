/******* Loading *******/

function showLoading(event) {
  event.stopPropagation();
  const loadingOverlay = document.getElementById("loading");
  const { heading } = event.target.dataset;
  if(heading) {
    loadingOverlay.querySelector(".c-loading__title").textContent = heading;
  }
  loadingOverlay.classList.remove("u-hidden");
}

window.addEventListener("load", () => {
  const loadingTriggers = document.querySelectorAll(".trigger-loading");
  loadingTriggers.forEach(trigger => trigger.addEventListener("click", showLoading));
})