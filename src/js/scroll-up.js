const scrollProgress = document.querySelector('.scroll-up');
let pos = document.documentElement.scrollTop;

export function calcScrollValue() {
  pos = document.documentElement.scrollTop;
  pos > 100
    ? (scrollProgress.style.display = 'flex')
    : (scrollProgress.style.display = 'none');
}
