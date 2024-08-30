import { createDevMarkup } from '../js/utils/render.js';
import { DEVELOPERS } from './const/team.js';

const teamModalOpenBtn = document.querySelector('.team-btn-open');
const teamModalCloseBtn = document.querySelector('.team-btn-close');
const teamList = document.querySelector('.team-list');
const backdrop = document.querySelector('.team-backdrop');

teamModalOpenBtn.addEventListener('click', onOpenClick);
teamModalCloseBtn.addEventListener('click', onCloseClick);
teamList.addEventListener('click', onDevClick);
backdrop.addEventListener('click', onBackdropClick);

teamList.insertAdjacentHTML('beforeend', createDevMarkup(DEVELOPERS));
const devSocials = [...teamList.children];

function onOpenClick() {
  backdrop.classList.remove('hidden');
  window.addEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = 'hidden';
}

function onCloseClick() {
  backdrop.classList.add('hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = 'auto';

  returnHidden();
}

function returnHidden() {
  devSocials.forEach(dev => {
    dev.lastElementChild.classList.remove('active-devel');
    dev.firstElementChild.classList.remove('arrow-up');
  });
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseClick();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseClick();
  }
}

function onDevClick(e) {
  const devClick = e.target.closest('.team-item');
  if (!devClick) {
    return;
  }
  
  const activeSoc = devClick.lastElementChild;
  const moreIcon = devClick.querySelector('.more-icon');
  const currentActiveDeveloper = document.querySelector('.active-devel');

  console.log(devClick.firstElementChild);
  if (currentActiveDeveloper) {
    currentActiveDeveloper.classList.remove('active-devel');
  }

  moreIcon.classList.add('arrow-up');
  devClick.classList.add('active-devel');

  if (activeSoc.style.maxHeight) {
    activeSoc.style.maxHeight = null;
    devClick.firstElementChild.classList.remove('arrow-up');
  } else {
    activeSoc.style.maxHeight = activeSoc.scrollHeight + 'px';
    moreIcon.classList.add('arrow-up');
  }
}
