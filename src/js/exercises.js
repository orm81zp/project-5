import Api from './api';
import {
  getClosest,
  renderByExercises,
  renderByFilters,
  renderFilters,
  renderPagination,
  showNotification,
} from './utils';

(() => {
  const HIDDEN_CLASS = 'hidden';
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
    keyword: '',
    pagination: {
      filters: {
        currentPage: 1,
        totalPages: 1,
        limit: 12,
      },
      exercises: {
        currentPage: 1,
        totalPages: 1,
        limit: 10,
      },
    },
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
  const paginationContainer = exercisesWrapper.querySelector('.pagination');

  // helpers
  const updateLimits = () => {
    if (window.innerWidth < 768) {
      state.pagination.filters.limit = 9;
      state.pagination.exercises.limit = 8;
    }
  };

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
      const { limit, currentPage } = state.pagination.exercises;
      const params = {
        [SEARCH_FILTER_MAPPING[filter]]: exercise,
        keyword,
        limit,
        page: currentPage,
      };

      const response = await Api.getExercises(params);
      const { results, totalPages, perPage } = response;
      state.exercise = exercise;
      state.keyword = keyword;

      // checking for empty response from api
      if (results.length === 0) {
        showNotification(
          'Sorry, there are no matching your request. Please try again!'
        );
        return;
      }

      state.pagination.exercises.totalPages = parseInt(totalPages);
      state.pagination.exercises.currentPage = currentPage + 1;
      state.pagination.exercises.limit = parseInt(perPage);

      renderByExercises(results, cardsExercises);
      renderPagination(paginationContainer, totalPages, currentPage);

      // checking if the end of search results has been reached
      if (currentPage > totalPages) {
        showNotification("We're sorry, but you've reached the end of results.");
      }
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
      const { limit, currentPage } = state.pagination.filters;
      const response = await Api.getFilters({
        filter,
        limit,
        page: currentPage,
      });
      const { results, totalPages, perPage } = response;
      state.filter = filter;
      state.exercise = null;

      // checking for empty response from api
      if (results.length === 0) {
        showNotification(
          'Sorry, there are no matching your request. Please try again!'
        );
        return;
      }

      state.pagination.filters.totalPages = parseInt(totalPages);
      state.pagination.filters.currentPage = currentPage + 1;
      state.pagination.filters.limit = parseInt(perPage);

      renderByFilters(results, cards);
      renderPagination(paginationContainer, totalPages, currentPage);

      // checking if the end of search results has been reached
      if (currentPage > totalPages) {
        showNotification("We're sorry, but you've reached the end of results.");
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

  // filter click listerner
  const filterClickHandler = event => {
    event.preventDefault();
    const isFilterLink =
      event.target.className && event.target.className.includes('filter-link');

    if (!isFilterLink) {
      return;
    }

    const filter = event.target.innerText.trim();
    state.pagination.filters.currentPage = 1;
    state.pagination.exercises.currentPage = 1;
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
      state.pagination.filters.currentPage = 1;
      state.pagination.exercises.currentPage = 1;
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

  // search input listerner
  const paginationHandler = event => {
    event.preventDefault();
    const pageLink = getClosest(event.target, '.list-item');

    if (pageLink && pageLink.dataset.page) {
      const { filter, exercise, keyword } = state;
      const currentPage = parseInt(pageLink.dataset.page);

      if (exercise) {
        state.pagination.filters.currentPage = 1;
        state.pagination.exercises.currentPage = currentPage;
        searchByExercise(filter, exercise, keyword);
      } else {
        state.pagination.exercises.currentPage = 1;
        state.pagination.filters.currentPage = currentPage;
        searchByFilter(filter);
      }
    }
  };

  paginationContainer.addEventListener('click', paginationHandler);

  breadcrumbsHome.addEventListener('click', event => {
    event.preventDefault();
    state.pagination.filters.currentPage = 1;
    state.pagination.exercises.currentPage = 1;
    searchByFilter(DEFAULT_FILTER);
  });

  // Update api limits for mibile view port
  window.matchMedia('(max-width: 767px)').addEventListener('change', e => {
    updateLimits();
  });

  // init
  // rendering filters
  updateLimits();
  renderFilters(Object.values(FILTERS), breadcrumbsFilters);

  // rendering cards by default filter
  searchByFilter(DEFAULT_FILTER);
})();
