/******* Accordion *******/

const options = {}

const accordionInterval = setInterval(() => {
  const { accordion } = window.theme
  if(accordion) {
    accordion('.c-accordion', options)
    clearInterval(accordionInterval);
  }
}, 100);