import Api from './api';
import { renderByExercises, renderByFilters, renderFilters } from './utils';

const HIDDEN_CLASS = 'hidden';
const FILTERS = {
  muscles: 'Muscles',
  bodyParts: 'Body parts',
  equipment: 'Equipment',
};
const DEFAULT_FILTER = FILTERS.muscles;
const searchMapping = {
  [FILTERS.muscles]: 'muscles',
  [FILTERS.bodyParts]: 'bodypart',
  [FILTERS.equipment]: 'equipment',
};

const state = {
  filter: DEFAULT_FILTER,
  exercise: null,
};

(() => {
  const breadcrumbsNav = document.getElementById('breadcrumbs-nav');
  const breadcrumbsHome = breadcrumbsNav.querySelector('.item-home');
  const breadcrumbsFilters = document.getElementById('breadcrumbs-filters');
  const mainCards = document.getElementById('main-cards');
  const categoryCards = document.getElementById('cards-category');
  const searchField = document.getElementById('search-field');
  const searchForm = searchField.querySelector('.search-form');
  const searchFieldInput = searchField.querySelector('.search-input');
  const searchFieldSubmit = searchField.querySelector('.seach-submit');
  const searchFieldReset = searchField.querySelector('.seach-reset');

  // helpers
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
    mainCards.innerHTML = '';
    categoryCards.innerHTML = '';
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
      updateBreadcrumbs(exercise);

      const params = {
        [searchMapping[filter]]: exercise,
        keyword,
      };

      const response = await Api.getExercises(params);
      const { results } = response;
      state.exercise = exercise;

      clearCards();
      renderByExercises(results, categoryCards);
      showSearchField();
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Calls API to get filters
   *
   * @param {string} filter
   */
  const searchByFilter = async filter => {
    try {
      showSearchField(true, true);
      const response = await Api.getFilters({ filter });
      const { results } = response;
      state.filter = filter;

      clearCards();
      clearBreadcrumbs();
      renderByFilters(results, mainCards);

      const filterItems = breadcrumbsFilters.querySelectorAll('.item');

      for (let filterItem of filterItems) {
        if (filterItem.innerText === filter) {
          filterItem.classList.add('active');
        } else {
          filterItem.classList.remove('active');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // filter click listerner
  const filterClickHandler = event => {
    event.preventDefault();

    if (event.target.nodeName !== 'A') {
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

    if (event.target.nodeName !== 'DIV') {
      return;
    }

    const exercise = event.target.dataset.category.trim();

    if (exercise) {
      searchByExercise(filter, exercise);
    }
  };

  mainCards.addEventListener('click', exerciseClickHandler);

  // form listerners
  const searchHandler = event => {
    event.preventDefault();
    const { filter, exercise } = state;
    const value = searchFieldInput.value;

    if (value.trim()) {
      searchByExercise(filter, exercise, value);
    }
  };

  searchFieldSubmit.addEventListener('click', searchHandler);
  searchForm.addEventListener('submit', searchHandler);
  searchForm.addEventListener('reset', () => {
    showResetButton(true);
  });

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
  searchByFilter(state.filter);
})();
