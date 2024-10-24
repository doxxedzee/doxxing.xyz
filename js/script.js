const video = document.getElementById('bg-video');

video.addEventListener('canplaythrough', () => {
  document.body.classList.add('loaded');
});
