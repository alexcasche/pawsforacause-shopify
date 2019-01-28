// /******* Click Events *******/

// const modalTriggers = document.querySelectorAll(".trigger-modal");

// function toggleModal(event) {
//   const { modalId, modalContentId } = event.target.dataset;
//   const allContent = document.querySelectorAll(".c-modal__content");
//   allContent.forEach(content => content.classList.add("u-hidden"));
//   const modalContent = document.getElementById(modalContentId);
//   if(modalContent) {
//     modalContent.classList.toggle("u-hidden");
//   }
//   const modal = document.getElementById(modalId);
//   if(modal.classList.contains("u-hidden")) {
//     modal.classList.remove("u-hidden");
//     document.body.classList.add("u-noScroll");
//   } else {
//     modal.classList.add("u-hidden");
//     document.body.classList.remove("u-noScroll");
//   }
// }

// modalTriggers.forEach(trigger => trigger.addEventListener('click', toggleModal));
