const scrollProgress = document.querySelector('.scroll-up');
let pos = document.documentElement.scrollTop;

scrollProgress.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

function calcScrollValue() {
  pos = document.documentElement.scrollTop;
  pos > 100
    ? (scrollProgress.style.display = 'flex')
    : (scrollProgress.style.display = 'none');
}
