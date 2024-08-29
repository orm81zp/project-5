import Api from './api';
import { LOCAL_STORAGE_KEY } from './const';
import {
  clearContent,
  getClosest,
  renderByExercises,
  showLoader,
} from './utils';

(() => {
  const favoritesWrapper = document.querySelector('.favorites');
  if (!favoritesWrapper) {
    return;
  }

  const state = {
    exercisesIds: [],
  };

  // TODO remove mock data before going to LIVE
  const MOCK_EXERCISES = [
    '64f389465ae26083f39b1b16',
    '64f389465ae26083f39b1b22',
    '64f389465ae26083f39b19d8',
    '64f389465ae26083f39b1b08',
    '64f389465ae26083f39b1859',
    '64f389465ae26083f39b1a3a',
    '64f389465ae26083f39b1964',
  ];

  state.exercisesIds =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || MOCK_EXERCISES;
  const exercisesContainer = favoritesWrapper.querySelector('.cards-exercises');
  const favoritesWrapperContainer =
    favoritesWrapper.querySelector('.favorites-wrapper');
  const messageContainer = favoritesWrapper.querySelector(
    '.notification-message'
  );

  // helpers
  const removeIdFromStorage = exerciseId => {
    state.exercisesIds = state.exercisesIds.filter(id => id !== exerciseId);
  };

  const exerciseClickHandler = event => {
    event.preventDefault();
    // check if clicked trash-button
    const className = event.target.className;
    const isTrashButton = className && className.includes('trash-link');

    if (isTrashButton) {
      const cardItem = getClosest(event.target, '.card-item');

      if (cardItem && cardItem.dataset) {
        removeIdFromStorage(cardItem.dataset.id);
        const { exercisesIds } = state;
        searchExercises(exercisesIds);
      }
    }
  };

  const searchExercises = async exercisesIds => {
    if (!exercisesIds || exercisesIds.length === 0) {
      clearContent(exercisesContainer);
      messageContainer.classList.remove('hidden');
      return;
    }

    messageContainer.classList.add('hidden');

    try {
      clearContent(exercisesContainer);
      showLoader(favoritesWrapperContainer);
      const [...exercises] = await Promise.all(
        exercisesIds.map(id => Api.getExerciseById(id))
      );
      renderByExercises(exercises, exercisesContainer, true);
    } catch (error) {
      console.log(error);
    } finally {
      showLoader(favoritesWrapperContainer, true);
    }
  };

  exercisesContainer.addEventListener('click', exerciseClickHandler);
  searchExercises(state.exercisesIds);
})();
