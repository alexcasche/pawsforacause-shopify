import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

function getOffset(el) {
  const rect = el.getBoundingClientRect()
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop
  return rect.top + scrollTop
}

function scrollEvent(link) {
  const destination = document.querySelector(
    link.dataset.scroll
  )
  if (destination) {
    const offset = getOffset(destination)
    window.scroll({
      top: offset,
      left: 0,
      behavior: 'smooth',
    })
  }
}

function setScrolls() {
  const links = document.querySelectorAll(
    'a[data-scroll*="#"]'
  )
  if (links) {
    links.forEach((link) => {
      link.removeEventListener('click', () =>
        scrollEvent(link)
      )
      link.addEventListener('click', () =>
        scrollEvent(link)
      )
    })
  }
}

setScrolls()
window.onresize = () => setScrolls()
