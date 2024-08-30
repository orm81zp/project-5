import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import Api from './api/index';
import { gsap } from 'gsap';

(() => {
  const footerWrapper = document.querySelector('footer');
  if (!footerWrapper) {
    return; // Якщо футера немає на сторінці, код не виконується.
  }

  const formSubmit = document.querySelector('.js-footer-form');
  const emailInput = document.querySelector('input[type="email"]');
  const btnSubmit = document.querySelector('.footer_form_btn');
  btnSubmit.addEventListener('click', fetchSubscription);

  function isValidEmail(email) {
    const emailPattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailPattern.test(email);
  }

  btnSubmit.disabled = true;

  emailInput.addEventListener('input', () => {
    const email = emailInput.value;

    if (isValidEmail(email)) {
      btnSubmit.classList.add('active');
      btnSubmit.disabled = false;
    } else {
      btnSubmit.classList.remove('active');
      btnSubmit.disabled = true;
    }
  });

  emailInput.addEventListener('blur', () => {
    const email = emailInput.value;

    if (!isValidEmail(email)) {
      iziToast.error({
        title: 'Error',
        message: 'Invalid email address was entered.',
      });
    } else {
      btnSubmit.classList.add('active');
    }
  });

  function fetchSubscription(event) {
    event.preventDefault();
    const email = emailInput.value;
    if (!isValidEmail(email)) {
      console.log('tyta');
      iziToast.error({
        title: 'Error',
        message: 'Invalid email address was entered.',
      });
      return;
    }

    const subscriptionData = {
      email: email,
    };
    console.log(subscriptionData);

    Api.addSubscription(subscriptionData)
      .then(resp => {
        const message = resp.message;
        iziToast.success({
          title: 'Success',
          message: message,
        });
      })
      .catch(error => {
        const badRequest = error.response.message;
        if (error.response.status === 409) {
          iziToast.warning({
            title: 'Warning',
            message: 'Subscription already exists',
          });
        } else if (error.response.status === 400) {
          iziToast.warning({
            title: 'Warning',
            message: badRequest,
          });
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
})();
