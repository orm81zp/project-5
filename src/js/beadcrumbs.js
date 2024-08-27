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

  // bodyPart: 'waist';
  // burnedCalories: 220;
  // description: "This refers
  // equipment: 'body weight';
  // gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0001.gif';
  // name: '3/4 sit-up';
  // popularity: 16834;
  // rating: 3.92;
  // target: 'abs';
  // time: 3;
  // _id: '64f389465ae26083f39b17a2';

  const clearCards = () => {
    mainCards.innerHTML = '';
    categoryCards.innerHTML = '';
    const categoryItem = breadcrumbsNav.querySelector('.item-category');
    categoryItem.innerText = '';
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
          <span>${name}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="__name">Burned calories:</span><span class="__value">${burnedCalories} / ${time} min</span>
            </li>
            <li class="item">
              <span class="__name">Body part:</span><span class="__value">${bodyPart}</span>
            </li>
            <li class="item">
              <span class="__name">Target:</span><span class="__value">${target}</span>
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
    clearCards();
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

  const searchByExercises = async (filter, category) => {
    try {
      const params = {
        [filter.toLowerCase()]: category,
      };

      const response = await Api.getExercises(params);
      const { results } = response;
      state.category = category;

      renderByExercises(results);

      const categoryItem = breadcrumbsNav.querySelector('.item-category');
      categoryItem.innerText = category;
    } catch (error) {
      console.error(error);
    }
  };

  const searchByFilter = async filter => {
    try {
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
})();
