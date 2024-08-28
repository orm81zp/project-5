import Api from './api';
import { renderByExercises, renderByFilters, renderFilters } from './utils';

const FILTERS = {
  muscles: 'Muscles',
  bodyParts: 'Body parts',
  equipment: 'Equipment',
};

const searchMapping = {
  [FILTERS.muscles]: 'muscles',
  [FILTERS.bodyParts]: 'bodypart',
  [FILTERS.equipment]: 'equipment',
};

const state = {
  filter: FILTERS.muscles,
  exercise: null,
};

(() => {
  const breadcrumbsNav = document.getElementById('breadcrumbs-nav');
  const breadcrumbsFilters = document.getElementById('breadcrumbs-filters');
  const mainCards = document.getElementById('main-cards');
  const categoryCards = document.getElementById('cards-category');
  const searchForm = document.querySelector('.search-form');
  const searchField = document.getElementById('search-field');
  const searchFieldInput = searchField.querySelector('.search-input');
  const searchFieldSubmit = searchField.querySelector('.seach-submit');

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

  const searchByExercise = async (filter, exercise, keyword = '') => {
    try {
      const categoryItem = breadcrumbsNav.querySelector('.item-exercise');
      categoryItem.innerText = exercise;
      categoryItem.setAttribute('title', exercise);
      categoryItem.classList.add('active');

      const params = {
        [searchMapping[filter]]: exercise,
        keyword,
      };

      const response = await Api.getExercises(params);
      const { results } = response;
      state.exercise = exercise;

      clearCards();
      renderByExercises(results, categoryCards);

      searchField.classList.remove('visually-hidden');
    } catch (error) {
      console.error(error);
    }
  };

  const searchByFilter = async filter => {
    try {
      searchField.classList.add('visually-hidden');
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

  // search listerner
  const searchHandler = event => {
    event.preventDefault();
    const { filter, exercise } = state;

    if (searchFieldInput.value) {
      searchByExercise(filter, exercise, searchFieldInput.value);
    }
  };

  searchFieldSubmit.addEventListener('click', searchHandler);
  searchForm.addEventListener('submit', searchHandler);

  // init
  // rendering filters
  renderFilters(Object.values(FILTERS), breadcrumbsFilters);
  // init rendering cards by a default filter
  searchByFilter(state.filter);
})();
