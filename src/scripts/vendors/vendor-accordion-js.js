import "accordion-js"
window.theme.accordion = buildAccordion

function buildAccordion(selector, options){
  const accordions = document.querySelectorAll(`${selector}.is-loading`);
  accordions.forEach(accordion => {
    const accordionId = `#${accordion.id}`
    new Accordion(accordionId, {
      duration: 350,
      ...options
    })
    accordion.classList.remove("is-loading")
  })
}