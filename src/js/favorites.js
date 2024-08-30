import Api from './api';
import { LOCAL_STORAGE_KEY, UPDATE_LOCAL_STORAGE_EVENT } from './const';
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

  state.exercisesIds =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  const exercisesContainer = favoritesWrapper.querySelector('.cards-exercises');
  const favoritesWrapperContainer =
    favoritesWrapper.querySelector('.favorites-wrapper');
  const messageContainer = favoritesWrapper.querySelector(
    '.notification-message'
  );

  const removeExerciseFromUI = exerciseId => {
    const cardItem = exercisesContainer.querySelector(
      `.card-item[data-id="${exerciseId}"]`
    );

    if (cardItem) {
      exercisesContainer.removeChild(cardItem);
    }
  };

  const isExistsFilter = exerciseId => {
    const cardItem = exercisesContainer.querySelector(
      `.card-item[data-id="${exerciseId}"]`
    );

    return cardItem ? false : true;
  };

  // helpers
  const removeById = exerciseId => {
    try {
      const exercisesFromStore =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      const exercisesIds = exercisesFromStore.filter(id => id !== exerciseId);
      state.exercisesIds = exercisesIds;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(exercisesIds));
      removeExerciseFromUI(exerciseId);
    } catch (error) {
      console.log(error);
    }
  };

  const removeClickHandler = event => {
    event.preventDefault();
    const className = event.target.className;
    const isTrashButton = className && className.includes('trash-link');

    if (isTrashButton) {
      const cardItem = getClosest(event.target, '.card-item');
      if (cardItem && cardItem.dataset) {
        removeById(cardItem.dataset.id);
      }
    }
  };

  const searchExercises = async exercisesIds => {
    if (!exercisesIds || exercisesIds.length === 0) {
      messageContainer.classList.remove('hidden');
      return;
    }

    messageContainer.classList.add('hidden');

    try {
      clearContent(exercisesContainer);
      showLoader(favoritesWrapperContainer);
      const [...exercises] = await Promise.all(
        exercisesIds.filter(isExistsFilter).map(id => Api.getExerciseById(id))
      );
      renderByExercises(exercises, exercisesContainer, true);
    } catch (error) {
      console.log(error);
    } finally {
      showLoader(favoritesWrapperContainer, true);
    }
  };

  exercisesContainer.addEventListener('click', removeClickHandler);

  document.addEventListener(UPDATE_LOCAL_STORAGE_EVENT, event => {
    searchExercises(event.detail);
  });

  searchExercises(state.exercisesIds);
})();
