/******* Product Form *******/

const productForms = document.querySelectorAll(".c-productForm.is-loading");

productForms.forEach(productForm => {
  console.log(productForm)
  const productFormInterval = setInterval(() => {
    const productFormReady = productForm.querySelector(".c-productForm__form")
    if(productFormReady) {
      productForm.classList.remove("is-loading")
      clearInterval(productFormInterval);
    }
  }, 100);
})