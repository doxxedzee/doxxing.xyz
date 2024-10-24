const audio = document.getElementById('audio');
document.getElementById('enter').addEventListener('click', function () {
  console.log('click')
  const element = document.getElementById('enter-remove') || document.getElementById('enter')
  element.style.opacity = '0'
  element.addEventListener('transitionend', () => element.remove())
  typeof window.orientation == 'undefined' && audio.play()
})

audio.onended = function () {
  audio.play()
}
// volume = document.querySelector('#volume')
// volume.addEventListener('change', function (_0x37049d) {
//   audio.volume = _0x37049d.currentTarget.value / 100
// })
// const domain = window.location.hostname;
// if (domain !== 'ruub.dev') {
//   const vol = document.getElementById('volume');
//   vol?.parentNode.removeChild(vol)
// }
