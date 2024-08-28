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
  category: null,
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

  const clearCategory = () => {
    const categoryItem = breadcrumbsNav.querySelector('.item-category');
    categoryItem.classList.remove('active');
    categoryItem.innerText = '';
  };

  const searchByExercises = async (filter, category, keyword = '') => {
    try {
      const categoryItem = breadcrumbsNav.querySelector('.item-category');
      categoryItem.innerText = category;
      categoryItem.classList.add('active');

      const params = {
        [searchMapping[filter]]: category,
        keyword,
      };

      const response = await Api.getExercises(params);
      const { results } = response;
      state.category = category;

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
      clearCategory();
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

  const filterClickHandler = event => {
    event.preventDefault();

    if (event.target.nodeName !== 'A') {
      return;
    }

    const filter = event.target.innerText;
    searchByFilter(filter);
  };

  breadcrumbsFilters.addEventListener('click', filterClickHandler);

  const categoryClickHandler = event => {
    event.preventDefault();

    if (event.target.nodeName !== 'DIV') {
      return;
    }

    const category = event.target.dataset.category;
    if (category) {
      searchByExercises(state.filter, category);
    }
  };

  mainCards.addEventListener('click', categoryClickHandler);

  const searchHandler = event => {
    event.preventDefault();
    const { filter, category } = state;

    if (searchFieldInput.value) {
      searchByExercises(filter, category, searchFieldInput.value);
    }
  };

  searchFieldSubmit.addEventListener('click', searchHandler);
  searchForm.addEventListener('submit', searchHandler);

  renderFilters(Object.values(FILTERS), breadcrumbsFilters);

  // init rendering cards be a default filter
  searchByFilter(state.filter);
})();
