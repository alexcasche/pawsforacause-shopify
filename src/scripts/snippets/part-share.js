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

const twitterBtns = document.querySelectorAll('.c-share__link--twitter');
twitterBtns.forEach(btn => btn.addEventListener('click', twitterShare));

function twitterShare() {
  const { text, url } = event.target.dataset;
  const share_url = `https://twitter.com/intent/tweet?url=${encodeURI(url)}&text=${encodeURI(text)}&via=PawsForACause`
  window.open(share_url, '_blank', windowOptions)
}