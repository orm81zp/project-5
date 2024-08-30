import Api from './api';
import { setupPagination } from './setup-pagination';

import {
  getClosest,
  renderByExercises,
  renderByFilters,
  renderFilters,
} from './utils';

(() => {
  const HIDDEN_CLASS = 'hidden';
  const PAGE = 1;
  const FILTERS = {
    muscles: 'Muscles',
    bodyParts: 'Body parts',
    equipment: 'Equipment',
  };
  const DEFAULT_FILTER = FILTERS.muscles;
  const SEARCH_FILTER_MAPPING = {
    [FILTERS.muscles]: 'muscles',
    [FILTERS.bodyParts]: 'bodypart',
    [FILTERS.equipment]: 'equipment',
  };
  const state = {
    filter: null,
    exercise: null,
  };

  const breadcrumbsNav = document.getElementById('breadcrumbs-nav');
  const breadcrumbsHome = breadcrumbsNav.querySelector('.item-home');
  const breadcrumbsFilters = document.getElementById('breadcrumbs-filters');
  const exercisesWrapper = document.querySelector('.exercises');
  const cards = exercisesWrapper.querySelector('.cards');
  const cardsExercises = exercisesWrapper.querySelector('.cards-exercises');
  const searchField = document.getElementById('search-field');
  const searchForm = searchField.querySelector('.search-form');
  const searchFieldInput = searchField.querySelector('.search-input');
  const searchFieldSubmit = searchField.querySelector('.seach-submit');
  const searchFieldReset = searchField.querySelector('.seach-reset');
  const pagination = document.querySelector('.pagination');

  // helpers
  const showLoader = (shouldHide = false) => {
    if (shouldHide) {
      const loader = exercisesWrapper.querySelector('.loader');

      if (loader) {
        loader.remove();
      }
    } else {
      const adjacentText = `<div class="loader"></div>`;
      exercisesWrapper.insertAdjacentHTML('beforeend', adjacentText);
    }
  };

  /**
   * Show / hide the search field's reset button
   *
   * @param {boolean} shouldHide
   */
  const showResetButton = (shouldHide = false) => {
    if (shouldHide) {
      searchFieldReset.classList.add(HIDDEN_CLASS);
    } else {
      searchFieldReset.classList.remove(HIDDEN_CLASS);
    }
  };

  /**
   * Show / hide and clear the search field's input
   *
   * @param {boolean} shouldHide
   * @param {boolean} shouldClear
   */
  const showSearchField = (shouldHide = false, shouldClear = false) => {
    if (shouldHide) {
      searchField.classList.add(HIDDEN_CLASS);
    } else {
      searchField.classList.remove(HIDDEN_CLASS);
    }

    if (shouldClear) {
      searchFieldInput.value = '';
    }
  };

  /**
   * Clear all cards, should be called before calling api
   */
  const clearCards = () => {
    cards.innerHTML = '';
    cardsExercises.innerHTML = '';
  };

  /**
   * Clear an exercise in breadcrums
   */
  const clearBreadcrumbs = () => {
    const categoryItem = breadcrumbsNav.querySelector('.item-exercise');
    categoryItem.removeAttribute('title');
    categoryItem.classList.remove('active');
    categoryItem.innerText = '';
  };

  /**
   * Add / update an exercise in breadcrums
   */
  const updateBreadcrumbs = exercise => {
    const categoryItem = breadcrumbsNav.querySelector('.item-exercise');
    categoryItem.setAttribute('title', exercise);
    categoryItem.classList.add('active');
    categoryItem.innerText = exercise;
  };

  /**
   * Calls API to get exercises
   *
   * @param {string} filter
   * @param {string} exercise
   * @param {string} keyword
   */
  const searchByExercise = async (filter, exercise, keyword = '') => {
    try {
      clearCards();
      showLoader();
      updateBreadcrumbs(exercise);

      const params = {
        [SEARCH_FILTER_MAPPING[filter]]: exercise,
        keyword,
      };

      const response = await Api.getExercises(params);
      const { results } = response;
      state.exercise = exercise;

      // todo
      pagination.innerHTML = '';
      console.log('res exercises:', results);
      // if (results.totalPages > 1) {
      //   setupPagination({
      //     params: params,
      //     totalPages: results?.totalPages,
      //     method: searchByExercise,
      //   });
      // }

      renderByExercises(results, cardsExercises);
    } catch (error) {
      console.error(error);
    } finally {
      showLoader(true);
      showSearchField();
    }
  };

  /**
   * Calls API to get filters
   *
   * @param {string} filter
   */
  const searchByFilter = async filter => {
    try {
      clearCards();
      clearBreadcrumbs();
      showLoader();
      showSearchField(true, true);
      const limit = window.innerWidth < 768 ? 9 : 12
      const response = await Api.getFilters({ filter, limit });
      const { results } = response;
      state.filter = filter;

      renderByFilters(results, cards);

      // setup pagination
      pagination.innerHTML = '';
      const perPage = window.innerWidth > 1280 ? 10000 : window.innerWidth < 768 ? 8 : 10;
      const totalPages = results.length > perPage ? Math.ceil(results.length / perPage) : 1;
      if (totalPages > 1) {
        setupPagination({
          params: {page: 1},
          totalPages: totalPages,
          method: searchByFilter,
        });
      }

      // highlight active filter
      const filterElements = breadcrumbsFilters.querySelectorAll('.item');

      for (let filterElement of filterElements) {
        if (filterElement.innerText === filter) {
          filterElement.classList.add('active');
        } else {
          filterElement.classList.remove('active');
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      showLoader(true);
    }
  };

  // export function fetchFavorites(params) {
  //   const perPage = window.innerWidth > 1280 ? 10000 : window.innerWidth < 768 ? 8 : 10;
  //   const favoritesMap = JSON.parse(localStorage.getItem(constants.FAV_KEY)) ?? [];
  //   const exercises = Object.values(favoritesMap);
  //   if (exercises && exercises.length) {
  //     const start = params && params.page ? (parseInt(params.page) - 1) * perPage : 0;
  //     const slicedExercises = exercises.slice(start, start + perPage);
  //     document.querySelector('.content').innerHTML = createExerciseMarkup(slicedExercises, true);
  //     document.querySelector('.pagination').innerHTML = '';
  //     const totalPages = exercises.length > perPage ? Math.ceil(exercises.length / perPage) : 1;
  //     if (totalPages > 1) {
  //       createPagination({
  //         params: params,
  //         totalPages: totalPages,
  //         method: fetchFavorites,
  //       });
  //     }
  //     attachExerciseModalListeners();
  //     attachRemoveFavoriteListeners();
  //   } else {
  //     document.querySelector('.content').innerHTML = `<p class="empty">
  //         It appears that you haven't added any exercises to your favorites yet.
  //         To get started, you can add exercises that you like to your favorites for easier access in the future.
  //       </p>`;
  //     document.querySelector('.pagination').innerHTML = '';
  //   }
  // }

  // filter click listerner
  const filterClickHandler = event => {
    event.preventDefault();
    const isFilterLink =
      event.target.className && event.target.className.includes('filter-link');

    if (!isFilterLink) {
      return;
    }

    const filter = event.target.innerText.trim();
    searchByFilter(filter);
  };

  breadcrumbsFilters.addEventListener('click', filterClickHandler);

  // exercise click listerner
  const exerciseClickHandler = event => {
    event.preventDefault();
    const { filter } = state;
    const cardLink = getClosest(event.target, '.card-item');

    if (!cardLink) {
      return;
    }

    if (cardLink.dataset && cardLink.dataset.exercise) {
      const exercise = cardLink.dataset.exercise.trim();
      searchByExercise(filter, exercise);
    }
  };

  cards.addEventListener('click', exerciseClickHandler);

  // form listerners
  const searchHandler = event => {
    event.preventDefault();
    const { filter, exercise } = state;
    const keyword = searchFieldInput.value.trim();

    if (keyword) {
      searchByExercise(filter, exercise, keyword);
    }
  };

  const formResetHandler = () => {
    showResetButton(true);
    const { filter, exercise } = state;
    searchByExercise(filter, exercise);
  };

  searchFieldSubmit.addEventListener('click', searchHandler);
  searchForm.addEventListener('submit', searchHandler);
  searchForm.addEventListener('reset', formResetHandler);

  // search input listerner
  const searchInputHandler = event => {
    if (event.target.value.trim()) {
      showResetButton();
    } else {
      showResetButton(true);
    }
  };

  searchFieldInput.addEventListener('input', searchInputHandler);

  breadcrumbsHome.addEventListener('click', () => {
    searchByFilter(DEFAULT_FILTER);
  });

  // init
  // rendering filters
  renderFilters(Object.values(FILTERS), breadcrumbsFilters);

  // rendering cards by default filter
  searchByFilter(DEFAULT_FILTER);
})();
