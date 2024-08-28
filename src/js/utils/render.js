export const renderFilters = (filters, container) => {
  const adjacentText = filters
    .map(name => `<li class="item"><a href="#">${name}</a></li>`)
    .join('');

  container.insertAdjacentHTML('beforeend', adjacentText);
};

export const renderByFilters = (cards, container) => {
  const adjacentText = cards
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

  container.insertAdjacentHTML('beforeend', adjacentText);
};

export const renderByExercises = (exercises, container) => {
  const adjacentText = exercises
    .map(
      ({ bodyPart, burnedCalories, gifUrl, name, rating, target, time, _id }) =>
        `
      <li class="card-item">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            <div class="__rating">${rating}</div>
          </div>
          <div>
            <a class="__start" href="#" data-id="${_id}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${gifUrl}"
            alt="${target}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${name}">${name}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${burnedCalories} / ${time} min">${burnedCalories} / ${time} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${bodyPart}">${bodyPart}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${target}">${target}</span>
            </li>
          </ul>
        </div>
      </li>
      `
    )
    .join('');

  container.insertAdjacentHTML('beforeend', adjacentText);
};
