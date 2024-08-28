import './js/mobileMenu';
import './js/modal';
import { calcScrollValue } from './js/scroll-up';

const scrollProgress = document.querySelector('.scroll-up');

scrollProgress.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
