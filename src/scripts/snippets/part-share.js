/******* Part Share *******/

const windowOptions = `
  resizable,scrollbars,status,
  width=450,
  height=400,
  toolbar=false,
  menubar=false,
  top=150,
  left=150
`

const facebookBtns = document.querySelectorAll('.c-share__link--facebook');
facebookBtns.forEach(btn => btn.addEventListener('click', facebookShare));

function facebookShare() {
  const { url } = event.target.dataset
  const share_url = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  window.open(share_url, '_blank', windowOptions)
}


const twitterBtns = document.querySelectorAll('.c-share__link--twitter');
twitterBtns.forEach(btn => btn.addEventListener('click', twitterShare));

function twitterShare() {
  const { text, url } = event.target.dataset
  const share_url = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(text)} ${encodeURIComponent(url)}&via=PawsForACause`
  window.open(share_url, '_blank', windowOptions)
}


const pinterestBtns = document.querySelectorAll('.c-share__link--pinterest');
pinterestBtns.forEach(btn => btn.addEventListener('click', pinterestShare));

function pinterestShare() {
  const { text, url, image } = event.target.dataset
  const share_url = `https://pinterest.com/pin/create/button/?url=${url}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(text)}`
  window.open(share_url, '_blank', windowOptions)
}


const emailBtns = document.querySelectorAll('.c-share__link--email');
emailBtns.forEach(btn => btn.addEventListener('click', emailShare));

function emailShare() {
  const { subject, url } = event.target.dataset
  console.log(subject)
  const body = `\n\n--\n\n${url}`
  const formattedSubject = subject.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  window.location.href=`mailto:?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(body)}`
}