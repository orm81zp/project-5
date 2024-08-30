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

export const renderExerciseModal = (exercise, container) => {
  const {
    bodyPart,
    burnedCalories,
    description,
    equipment,
    gifUrl,
    name,
    popularity,
    rating,
    target,
    time,
    _id,
  } = exercise;

  const innerText = `
      <div class="modal-gif-container">
        <img class="modal-gif" src="${gifUrl}" alt="${target}">
      </div>
      <div class="modal-content">
        <h2>${name}</h2>
        <div class="modal-rating">
            <span>${rating}</span>
            <span class="modal-stars">★★★★☆</span>
        </div>
        <div class="modal-details">
            <p><strong>Target:</strong> ${target}</p>
            <p><strong>Body Part:</strong> ${bodyPart}</p>
            <p><strong>Equipment:</strong> ${equipment}</p>
            <p><strong>Popular:</strong> ${popularity}</p>
            <p><strong>Burned Calories:</strong> ${burnedCalories}/${time} min</p>
        </div>
        <p class="description">${description}</p>
        <ul class="modal-controls" data-id=${_id}>
          <li class="modal-controls-item">
            <button class="modal-favorite-button">
              Add to favorites
                <svg class="modal-favorite-icon" width="24" height="24">
                  <use href="./img/icons.svg#icon-heart"></use>
                </svg>
            </button>
          </li>
          <li class="modal-controls-item">
            <button class="modal-rating-button">Give a rating</button>
          </li>
        </div>
      </div>
      `;

  container.innerHTML = innerText;
};
export function createDevMarkup(developers) {
  return developers
    .map(developer => {
      const { name, linkedin, github } = developer;
      return ` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="../../img/icons.svg#icon-more"></use>
          </svg>
          <h3 class="team-name">${name}</h3>
          <div class="hidden-content">
            <ul class="team-soc-list">
              <li class="team-soc-item">
                <a
                  href="${linkedin}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="../../img/icons.svg#icon-linkedin"></use>
                  </svg>
                </a>
              </li>
              <li class="team-soc-item">
                <a
                  href="${github}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="../../img/icons.svg#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
`;
    })
    .join('');
}
