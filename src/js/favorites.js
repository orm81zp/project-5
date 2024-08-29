import Api from './api';
import { renderByExercises } from './utils';

(() => {
  const MOCK_EXERCISES = [
    '64f389465ae26083f39b1b16',
    '64f389465ae26083f39b1b22',
    '64f389465ae26083f39b19d8',
    '64f389465ae26083f39b1b08',
    '64f389465ae26083f39b1859',
    '64f389465ae26083f39b1a3a',
    '64f389465ae26083f39b1964',
  ];

  // const exercises = JSON.parse(localStorage.getItem('exercises')) || []
  const exercisesIds = MOCK_EXERCISES;
  const favoritesWrapper = document.querySelector('.favorites');
  const exercisesContainer = favoritesWrapper.querySelector('.cards-exercises');

  const messageContainer = favoritesWrapper.querySelector(
    '.notification-message'
  );

  const searchExercises = async exercisesIds => {
    if (!exercisesIds || exercisesIds.length === 0) {
      messageContainer.classList.remove('hidden');
      return;
    }

    const promises = [];
    for (let id of exercisesIds) {
      promises.push(Api.getExerciseById(id));
    }
    try {
      const [...exercises] = await Promise.all(promises);
      renderByExercises(exercises, exercisesContainer);
    } catch (error) {
      console.log(error);
    }
  };

  searchExercises(exercisesIds);
})();
