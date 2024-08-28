import Notiflix from 'notiflix';
import Api from './api/index';
import { gsap } from 'gsap';

Notiflix.Notify.init();

const formSubmit = document.querySelector('.js-footer-form');
const emailInput = document.querySelector('input[type="email"]');
const btnSubmit = document.querySelector('.footer_form_btn');
formSubmit.addEventListener('submit', fetchSubscription);

function isValidEmail(email) {
  // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

btnSubmit.disabled = true;

emailInput.addEventListener('input', () => {
  const email = emailInput.value;

  if (isValidEmail(email)) {
    btnSubmit.style.backgroundColor = '#c6cdd1';
    btnSubmit.disabled = false;
  } else {
    btnSubmit.style.backgroundColor = '#f4f4f4';
    btnSubmit.disabled = true;
  }
});

function fetchSubscription(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    Notiflix.Notify.failure('Invalid email address was entered.');
    return;
  }

  const subscriptionData = {
    email: email,
  };

  Api.addSubscription(subscriptionData)
    .then(resp => {
      const massage = resp.data.message;
      Notiflix.Notify.success(massage);
    })
    .catch(error => {
      const badRequest = error.response.data.message;
      if (error.response.status === 409) {
        Notiflix.Notify.warning('Subscription already exists');
      }
      if (error.response.status === 400) {
        Notiflix.Notify.warning(badRequest);
      }
    });
  formSubmit.reset();
}
const socialItems = document.querySelectorAll('.footer_soc_item');

socialItems.forEach(item => {
  const icon = item.querySelector('.footer_soc_icon');

  item.addEventListener('mouseenter', () => {
    gsap.to(item, {
      keyframes: {
        '0%': { rotation: -5 },
        '25%': { rotation: 5 },
        '50%': { rotation: -5 },
        '75%': { rotation: 5 },
        '100%': { rotation: 0 },
      },
      duration: 0.5,
      repeat: 1,
    });

    gsap.to(icon, {
      keyframes: {
        '0%': { x: -3 },
        '25%': { x: 3 },
        '50%': { x: -3 },
        '75%': { x: 3 },
        '100%': { x: 0 },
      },
      duration: 0.2,
      repeat: 3,
    });
  });

  item.addEventListener('mouseleave', () => {
    gsap.to(item, {
      rotation: 0,
      duration: 0.2,
    });

    gsap.to(icon, {
      x: 0,
      duration: 0.2,
    });
  });
});

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};
const icon = document.querySelector('.footer_logo_icon');
const text = document.querySelector('.footer_title_span');

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(icon);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    gsap.to(icon, {
      duration: 2,
      opacity: 1,
      x: 0,
      rotationX: 360,
    });
    gsap.to(text, {
      duration: 2,
      opacity: 1,
    });
  });
}