export const getClosest = (target, querySelector) => {
  return target.closest(querySelector);
};

export const showLoader = (container, shouldHide = false) => {
  if (shouldHide) {
    const loader = container.querySelector('.loader');

    if (loader) {
      loader.remove();
    }
  } else {
    const adjacentText = `<div class="loader"></div>`;
    container.insertAdjacentHTML('beforeend', adjacentText);
  }
};

export const clearContent = containers => {
  if (Array.isArray(containers)) {
    for (let container of containers) {
      container.innerHTML = '';
    }
  } else {
    containers.innerHTML = '';
  }
};

export function isValidEmail(email) {
  const emailPattern = /^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
  return emailPattern.test(email);
}
