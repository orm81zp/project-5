import iconsPath from '../../img/icons.svg';

export const convertRating = rating => {
  return rating % 1 ? `${Math.round(rating * 10) / 10}` : `${rating}.0`;
};

export const renderFilters = (filters, container) => {
  const adjacentText = filters
    .map(
      name =>
        `<li class="item"><a class="filter-link" href="#">${name}</a></li>`
    )
    .join('');

  container.insertAdjacentHTML('beforeend', adjacentText);
};

export const renderByFilters = (cards, container) => {
  const adjacentText = cards
    .map(
      ({ filter, name, imgURL }) =>
        `
      <li class="card-item" data-exercise="${name}">
        <a class="card-link" href="#">
          <img
            src="${imgURL}"
            alt="${name}"
          />
          <div class="card-content">
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

export const renderByExercises = (exercises, container, isFavorite = false) => {
  const adjacentText = exercises
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
      }) => {
        const ratingOrTrash = isFavorite
          ? `<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="${iconsPath}#icon-trash"></use>
              </svg>
            </a>`
          : `<div class="exercises-ratio">
              <p class="ratio-value">${convertRating(rating)}</p>
              <svg class="icon-star ratio-star" width="20" height="20">
                <use href="${iconsPath}#icon-star"></use>
                </svg>
            </div>`;

        return `
      <li class="card-item" data-id="${_id}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${ratingOrTrash}
          </div>
          <button class="modal-exercise-info" type="button" data-id="${_id}">
            <span>Start</span>
            <svg class="icon-arrow-right icon-arrow" width="12" height="12">
              <use href="${iconsPath}#icon-arrow-right"></use>
            </svg>
          </button>
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
      `;
      }
    )
    .join('');

  container.insertAdjacentHTML('beforeend', adjacentText);
};

const ratingStarsHTML = rating => {
  const fullStarsCount = Math.floor(rating);
  const partialFillPercentage = (rating - fullStarsCount) * 100;

  const starItemText = (starClass, overlay = '') => {
    return `
    <li class="rating-item">
      <svg class="rating-star ${starClass}" width="18" height="18">
        <use href="${iconsPath}#icon-star"></use>
        ${overlay}
      </svg>
    </li>`;
  };

  let starsText = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStarsCount) {
      starsText += starItemText('full');
    } else if (i == fullStarsCount && partialFillPercentage > 0) {
      starsText += starItemText(
        'partial',
        `<svg class="overlay" style="clip-path:inset(0 ${
          100 - partialFillPercentage
        }% 0 0);"><use href="${iconsPath}#icon-star"></use></svg>`
      );
    } else {
      starsText += starItemText('empty');
    }
  }

  return starsText;
};

export const updateFavoriteButton = (isFavorite, container) => {
  const innerText = `
      ${!isFavorite ? 'Add to favorites' : 'Remove from favorites'}
        <svg class="favorite-icon" width="18" height="18">
          <use href="${iconsPath}#${
    !isFavorite ? 'icon-heart' : 'icon-trash'
  }"></use>
        </svg>`;

  container.innerHTML = innerText;
  if (isFavorite) {
    container.classList.add('remove');
  } else {
    container.classList.remove('remove');
  }
};

export const renderExerciseModal = (exercise, isFavorite, container) => {
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
      <div class="gif-container">
        <img class="modal-gif" src="${gifUrl}" alt="${target}" width="360" height="360">
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="exercise-name capitalize">${name}</h3>
          <ul class="rating-stars">
            <li class="rating-item">
              <p class="rating-value">${rating.toFixed(1)}</p>
            </li>
            ${ratingStarsHTML(rating)}
          </ul>
        </div>
        <ul class="details">
          <li class="details-item">
            <h4 class="details-header">Target</h4>
            <p class="details-value capitalize">${target}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Body Part</h4>
            <p class="details-value capitalize">${bodyPart}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Equipment</h4>
            <p class="details-value capitalize">${equipment}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Popular</h4>
            <p class="details-value">${popularity}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Burned Calories</h4>
            <p class="details-value">${burnedCalories}/${time} min</p>
          </li>
        </ul>
        <p class="description">${description}</p>
      </div>`;

  container.innerHTML = innerText;
};
export function createDevMarkup(developers) {
  return developers
    .map(developer => {
      const { name, linkedin, github } = developer;
      return ` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="${iconsPath}#icon-more"></use>
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
                    <use href="${iconsPath}#icon-linkedin"></use>
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
                    <use href="${iconsPath}#icon-github"></use>
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

export const renderPagination = (container, totalPages, currentPage) => {
  let adjacentText = '';
  container.innerHTML = '';
  const visiblePages = 3;

  if (currentPage > 1) {
    adjacentText += `<li class="list-item list-item-action go-to-start" data-page="1"><a class="page-link" href="#"><<</a></li>`;
    adjacentText += `<li class="list-item list-item-action go-to-prev" data-page="${
      currentPage - visiblePages
    }"><a class="page-link" href="#"><</a></li>`;
  }

  if (currentPage - 1 >= 1) {
    adjacentText += `<li class="list-item" data-page="${
      currentPage - 1
    }"><a class="page-link" href="#">${currentPage - 1}</a></li>`;
  }

  adjacentText += `<li class="list-item active" data-page="${currentPage}"><a class="page-link" href="#">${currentPage}</a></li>`;

  if (currentPage + 1 <= totalPages) {
    adjacentText += `<li class="list-item" data-page="${
      currentPage + 1
    }"><a class="page-link" href="#">${currentPage + 1}</a></li>`;
  }

  if (currentPage === 1 && currentPage + 2 <= totalPages) {
    adjacentText += `<li class="list-item" data-page="${
      currentPage + 2
    }"><a class="page-link" href="#">${currentPage + 2}</a></li>`;
  }

  if (currentPage < totalPages) {
    adjacentText += `<li class="list-item list-item-action go-to-next" data-page="${
      currentPage + visiblePages
    }"><a class="page-link" href="#">></a></li>`;
    adjacentText += `<li class="list-item list-item-action go-to-end" data-page="${totalPages}"><a class="page-link" href="#">>></a></li>`;
  }

  container.insertAdjacentHTML('beforeend', adjacentText);
};
