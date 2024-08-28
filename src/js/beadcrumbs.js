import Api from './api';

const searchMapping = {
  muscles: 'muscles',
  'body parts': 'bodypart',
  equipment: 'equipment',
};

const state = {
  filter: 'Muscles',
  category: null,
};

(() => {
  const breadcrumbsNav = document.getElementById('breadcrumbs-nav');
  const breadcrumbsFilters = document.getElementById('breadcrumbs-filters');
  const mainCards = document.getElementById('main-cards');
  const categoryCards = document.getElementById('cards-category');
  const searchField = document.getElementById('search-field');
  const searchFieldInput = searchField.querySelector('.search-input');
  const searchFieldSubmit = searchField.querySelector('.seach-submit');

  const clearCards = (clearCategory = false) => {
    mainCards.innerHTML = '';
    categoryCards.innerHTML = '';

    if (clearCategory) {
      const categoryItem = breadcrumbsNav.querySelector('.item-category');
      categoryItem.classList.remove('active');
      categoryItem.innerText = '';
    }
  };

  const renderByExercises = exercises => {
    clearCards();
    const adjacentImages = exercises
      .map(
        ({
          bodyPart,
          burnedCalories,
          gifUrl,
          name,
          rating,
          target,
          time,
          _id,
        }) =>
          `
      <li class="card-item" data-id="${_id}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            <div class="__rating">${rating}</div>
          </div>
          <div>
            <div class="__start">Start</div>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${gifUrl}"
            alt="${target}"
            width="24"
            height="24"
          />
          <span class="card-content-name">${name}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value">${burnedCalories} / ${time} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value">${bodyPart}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value">${target}</span>
            </li>
          </ul>
        </div>
      </li>
      `
      )
      .join('');

    categoryCards.insertAdjacentHTML('beforeend', adjacentImages);
  };

  const renderByFilters = cards => {
    clearCards(true);
    const adjacentImages = cards
      .map(
        ({ filter, name, imgURL }) =>
          `
      <li class="card-item">
        <a class="card-link" href="#">
          <img
            src="${imgURL}"
            alt="${name}"
          />
          <div class="card-content" data-category="${name}">
            <div class="card-name">${name}</div>
            <div class="card-filter">${filter}</div>
          </div>
        </a>
      </li>
      `
      )
      .join('');

    mainCards.insertAdjacentHTML('beforeend', adjacentImages);
  };

  const searchByExercises = async (filter, category, keyword = '') => {
    try {
      const categoryItem = breadcrumbsNav.querySelector('.item-category');
      categoryItem.innerText = category;
      categoryItem.classList.add('active');

      const params = {
        [searchMapping[filter.toLowerCase()]]: category,
        keyword,
      };

      const response = await Api.getExercises(params);
      const { results } = response;
      state.category = category;

      renderByExercises(results);

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

      renderByFilters(results);

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

  searchByFilter(state.filter);

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

  searchByFilter(state.filter);

  mainCards.addEventListener('click', categoryClickHandler);

  const searchClickHandler = event => {
    event.preventDefault();
    const { filter, category } = state;
    searchByExercises(filter, category, searchFieldInput.value);
  };

  searchFieldSubmit.addEventListener('click', searchClickHandler);
})();
