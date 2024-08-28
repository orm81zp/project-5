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
  const searchForm = document.querySelector('.search-form');
  const searchField = document.getElementById('search-field');
  const searchFieldInput = searchField.querySelector('.search-input');
  const searchFieldSubmit = searchField.querySelector('.seach-submit');
  const searchFieldReset = searchField.querySelector('.seach-reset');

  // helpers
  const showResetButton = (shouldHide = false) => {
    if (shouldHide) {
      searchFieldReset.classList.add(HIDDEN_CLASS);
    } else {
      searchFieldReset.classList.remove(HIDDEN_CLASS);
    }
  };

  const clearCards = () => {
    mainCards.innerHTML = '';
    categoryCards.innerHTML = '';
  };

  const clearBreadcrumbs = () => {
    const categoryItem = breadcrumbsNav.querySelector('.item-exercise');
    categoryItem.removeAttribute('title');
    categoryItem.classList.remove('active');
    categoryItem.innerText = '';
  };

  const updateBreadcrumbs = exercise => {
    const categoryItem = breadcrumbsNav.querySelector('.item-exercise');
    categoryItem.setAttribute('title', exercise);
    categoryItem.classList.add('active');
    categoryItem.innerText = exercise;
  };

  // functional
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

      searchField.classList.remove(HIDDEN_CLASS);
    } catch (error) {
      console.error(error);
    }
  };

  const searchByFilter = async filter => {
    try {
      searchField.classList.add(HIDDEN_CLASS);
      searchFieldInput.value = '';

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

  // filter listerner
  const filterClickHandler = event => {
    event.preventDefault();

    if (event.target.nodeName !== 'A') {
      return;
    }

    const filter = event.target.innerText;
    searchByFilter(filter);
  };

  breadcrumbsFilters.addEventListener('click', filterClickHandler);

  // exercise listerner
  const exerciseClickHandler = event => {
    event.preventDefault();
    const { filter } = state;

    if (event.target.nodeName !== 'DIV') {
      return;
    }

    const exercise = event.target.dataset.category;
    if (exercise) {
      searchByExercise(filter, exercise);
    }
  };

  mainCards.addEventListener('click', exerciseClickHandler);

  // search input / form listerners
  const searchHandler = event => {
    event.preventDefault();
    const { filter, exercise } = state;

    if (searchFieldInput.value.trim()) {
      searchByExercise(filter, exercise, searchFieldInput.value);
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
  // init rendering cards by a default filter
  searchByFilter(state.filter);
})();
