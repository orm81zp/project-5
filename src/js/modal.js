import Api from './api/index';
import { renderExerciseModal, updateFavoriteButton } from './utils';
import rater from 'rater-js';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

let refs = {};
let raitingRefs = {};
let modalId;

const getFavorites = () => {
  let favorites = localStorage.getItem('favorite-exercise-list');
  if (favorites === null) {
    return [];
  }

  return JSON.parse(favorites);
};

const isFavoriteId = id => {
  const ids = getFavorites(id);
  if (!ids) {
    return false;
  }

  return ids.includes(id);
};

const processFavorites = () => {
  const id = refs.favorite.dataset.id;
  if (!id) {
    return;
  }

  let ids = getFavorites();
  if (!ids) {
    localStorage.setItem('favorite-exercise-list', JSON.stringify([id]));
    updateFavoriteButton(isFavoriteId(id), refs.favorite);
    return;
  }

  if (isFavoriteId(id)) {
    ids.splice(ids.indexOf(id), 1);
  } else {
    ids.push(id);
  }

  localStorage.setItem('favorite-exercise-list', JSON.stringify(ids));
  updateFavoriteButton(isFavoriteId(id), refs.favorite);
};

const resetExerciseModal = async id => {
  try {
    const data = await Api.getExerciseById(id);

    const favorite = isFavoriteId(id);
    renderExerciseModal(data, favorite, refs.container);

    refs.favorite = document.querySelector('[data-modal-favorite]');
    refs.favorite.addEventListener('click', processFavorites);
    updateFavoriteButton(favorite, refs.favorite);

    refs.modal.classList.toggle('is-hidden');

    setupRaitingModal(id);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `${error}`,
    });
    return;
  }
};

const setupExerciseModal = () => {
  refs = {
    opener: document.querySelector('[data-modal-open]'),
    closer: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    container: document.querySelector('[data-modal-content]'),
  };

  if (!refs.opener || !refs.closer || !refs.modal || !refs.container) {
    return;
  }

  refs.opener.addEventListener('click', event => {
    const target = event.target;
    if (target.nodeName !== 'A') {
      return;
    }

    event.preventDefault();

    const id = target.dataset.id;
    if (!id) {
      return;
    }

    resetExerciseModal(id);
  });

  refs.closer.addEventListener('click', () => {
    refs.modal.classList.toggle('is-hidden');

    if (refs.favorite) {
      refs.favorite.removeEventListener('click', processFavorites);
    }

    if (refs.rating) {
      refs.rating.removeEventListener('click', processRating);
    }

    refs.container.innerHTML = '';
  });
};

function setValueToRaiting(raiting) {
  let value = document.querySelector('.raiting-value');
  value.innerText = `${raiting.toFixed(1)}`;
}

let myRater = rater({
  starSize: 24,
  element: document.querySelector('#rater'),
  rateCallback: function rateCallback(raiting, done) {
    setValueToRaiting(raiting);
    this.setRating(raiting);
    done();
  },
});

function resetRateForm() {
  document.querySelector('.raiting-form input').value = '';
  document.querySelector('.raiting-form textarea').value = '';
  myRater.clear();
}

function sendRaiting(event) {
  try {
    Api.addRateByExerciseId(modalId, {
      rate: myRater.getRating(),
      email: event.target[0].value,
      review: event.target[1].value,
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Unable to send rate',
    });
    console.log(error);
  } finally {
    setValueToRaiting(0);
    resetRateForm();
    toggleRaitingModal();
  }
}

const form = document.querySelector('.raiting-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = !event.target[0].value;
  const comment = !event.target[1].value;

  if (email || comment) {
    iziToast.error({
      title: 'Error',
      message: 'Email and comment fields should not be empty',
    });
    return;
  }

  sendRaiting(event);
});

function toggleRaitingModal() {
  raitingRefs.modal.classList.toggle('is-hidden');
  refs.modal.classList.toggle('is-hidden');
}

const setupRaitingModal = id => {
  modalId = id;

  raitingRefs = {
    openModalBtn: document.querySelector('[data-raiting-modal-open]'),
    closeModalBtn: document.querySelector('[data-raiting-modal-close]'),
    modal: document.querySelector('[data-raiting-modal]'),
  };

  raitingRefs.openModalBtn.addEventListener('click', toggleRaitingModal);
  raitingRefs.closeModalBtn.addEventListener('click', toggleRaitingModal);
};

window.addEventListener('load', () => {
  setupExerciseModal();
});
