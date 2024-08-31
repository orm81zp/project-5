import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import rater from 'rater-js';
import Api from './api/index';
import { LOCAL_STORAGE_KEY, UPDATE_LOCAL_STORAGE_EVENT } from './const';
import { getClosest, renderExerciseModal, updateFavoriteButton, isValidEmail } from './utils';

let refs = {};
let raitingRefs = {};
let modalId;

const getFavorites = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
};

const isFavoriteId = id => {
  const ids = getFavorites(id);
  if (!ids) {
    return false;
  }

  return ids.includes(id);
};

const storeUpdated = () => {
  document.dispatchEvent(
    new CustomEvent(UPDATE_LOCAL_STORAGE_EVENT, { detail: getFavorites() })
  );
};

const processFavorites = () => {
  const id = refs.favorite.dataset.id;
  if (!id) {
    return;
  }

  let ids = getFavorites();
  if (!ids) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([id]));
    updateFavoriteButton(isFavoriteId(id), refs.favorite);
    storeUpdated();
    return;
  }

  if (isFavoriteId(id)) {
    ids.splice(ids.indexOf(id), 1);
  } else {
    ids.push(id);
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ids));
  updateFavoriteButton(isFavoriteId(id), refs.favorite);
  storeUpdated();
};

const resetExerciseModal = async id => {
  try {
    refs.container.innerHTML = '';
    const data = await Api.getExerciseById(id);

    const favorite = isFavoriteId(id);
    renderExerciseModal(data, favorite, refs.container);
    updateFavoriteButton(favorite, refs.favorite);
    refs.favorite.dataset.id = id;

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

const closeExerciseModal = () => {
  refs.modal.classList.toggle('is-hidden');
};

const setupExerciseModal = () => {
  refs = {
    opener: document.querySelector('[data-modal-open]'),
    closer: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    container: document.querySelector('[data-modal-content]'),
    favorite: document.querySelector('[data-modal-favorite]'),
  };

  if (
    !refs.opener ||
    !refs.closer ||
    !refs.modal ||
    !refs.container ||
    !refs.favorite
  ) {
    return;
  }

  refs.opener.addEventListener('click', event => {
    event.preventDefault();
    const isStartButton = getClosest(event.target, '.modal-exercise-info');

    if (isStartButton) {
      const cardItem = getClosest(event.target, '.card-item');

      if (cardItem && cardItem.dataset) {
        const id = cardItem.dataset.id;
        if (!id) {
          return;
        }

        resetExerciseModal(id);
      }
    }
  });

  refs.favorite.addEventListener('click', processFavorites);

  refs.closer.addEventListener('click', closeExerciseModal);
  document.addEventListener('keydown', function (event) {
    if (!refs.modal.classList.contains('is-hidden')) {
      if (event.key === 'Escape') {
        closeExerciseModal();
      }
    }
  });
  refs.modal.addEventListener('click', function (event) {
    if (event.target === refs.modal) {
      closeExerciseModal();
    }
  });
};

function setValueToRaiting(raiting) {
  let value = document.querySelector('.raiting-value');
  value.innerText = `${raiting.toFixed(1)}`;
}

let myRater = rater({
  starSize: 20,
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
    toggleRaitingModal();
  }
}

const form = document.querySelector('.raiting-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = document.querySelector('.raiting-form input').value;
  if (!isValidEmail(email)) {
    iziToast.error({
      title: 'Error',
      message: 'Invalid email address was entered.',
    });
    return;
  }

  sendRaiting(event);
});

function toggleRaitingModal() {
  raitingRefs.modal.classList.toggle('is-hidden');
  refs.modal.classList.toggle('is-hidden');

  //reset form if closed
  if (raitingRefs.modal.classList.contains('is-hidden')) {
    setValueToRaiting(0);
    resetRateForm();
  }
}

const onChange = (event) => {
  const email = !document.querySelector('.raiting-form input').value;
  const comment = !document.querySelector('.raiting-form textarea').value;
  const raiting = !myRater.getRating();

  const button = document.querySelector('.raiting-form button');

  button.disabled = raiting || email || comment;
} 

const setupRaitingModal = id => {
  modalId = id;

  raitingRefs = {
    openModalBtn: document.querySelector('[data-raiting-modal-open]'),
    closeModalBtn: document.querySelector('[data-raiting-modal-close]'),
    modal: document.querySelector('[data-raiting-modal]'),
  };

  raitingRefs.openModalBtn.dataset.id = id;

  //reassign event listener to avoid multiple assigment to elements
  raitingRefs.openModalBtn.removeEventListener('click', toggleRaitingModal);
  raitingRefs.closeModalBtn.removeEventListener('click', toggleRaitingModal);

  raitingRefs.openModalBtn.addEventListener('click', toggleRaitingModal);
  raitingRefs.closeModalBtn.addEventListener('click', toggleRaitingModal);

  //reassign event listener to avoid multiple assigment to elements
  document.querySelector('.raiting-form input').removeEventListener("keyup", onChange);
  document.querySelector('.raiting-form textarea').removeEventListener("keyup", onChange);
  document.getElementById('rater').removeEventListener("click", onChange);

  document.querySelector('.raiting-form input').addEventListener("keyup", onChange);
  document.querySelector('.raiting-form textarea').addEventListener("keyup", onChange);
  document.getElementById('rater').addEventListener("click", onChange);
};

window.addEventListener('load', () => {
  setupExerciseModal();
});
