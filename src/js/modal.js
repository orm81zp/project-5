import Api from './api/index';
import { renderExerciseModal } from './utils';

let refs = {};

const resetExerciseModal = async id => {
  try {
    const data = await Api.getExerciseById(id);

    renderExerciseModal(data, refs.container);

    refs.modal.classList.toggle('is-hidden');
  } catch (error) {
    console.log(error);
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

    const id = target.dataset.id;
    if (!id) {
      return;
    }

    resetExerciseModal(id);
  });

  refs.closer.addEventListener('click', () => {
    refs.modal.classList.toggle('is-hidden');
    refs.container.innerHTML = '';
  });
};

window.addEventListener('load', () => {
  setupExerciseModal();
});
