import bodymovin from 'bodymovin'

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/resources/mild_wave.json'
})
var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('bm2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/resources/check_mark.json'
})
var animation3 = bodymovin.loadAnimation({
  container: document.getElementById('bm3'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/resources/changing.json'
})
var animation4 = bodymovin.loadAnimation({
  container: document.getElementById('bm4'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/resources/jump_loader.json'
})
