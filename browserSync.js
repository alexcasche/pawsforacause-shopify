const browserSync = require('browser-sync')
const BASE_URL = 'https://pawsforacause.com'
const PREVIEW_QUERY =
  '?preview_theme_id=44007161954'

browserSync({
  proxy: `${BASE_URL}${PREVIEW_QUERY}`,
  files: 'browserUpdate.js',
})
