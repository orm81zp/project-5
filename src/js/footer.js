import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import Api from './api/index';
import { gsap } from 'gsap';
import { isValidEmail } from './utils';

(() => {
  const footerWrapper = document.querySelector('footer');
  if (!footerWrapper) {
    return; 
  }

  const formSubmit = document.querySelector('.js-footer-form');
  const emailInput = document.querySelector('input[type="email"]');
  const btnSubmit = document.querySelector('.footer_form_btn');
  btnSubmit.addEventListener('click', fetchSubscription);

  btnSubmit.disabled = true;

  emailInput.addEventListener('input', () => {
    const email = emailInput.value;

    if (isValidEmail(email)) {
      btnSubmit.classList.add('active');
      btnSubmit.disabled = false;
      emailInput.classList.add('active')
    } else {
      btnSubmit.classList.remove('active');
      btnSubmit.disabled = true;
      emailInput.classList.remove('active')
    }
  });

  emailInput.addEventListener('blur', () => {
    const email = emailInput.value;
    if (email === '') {
      return;
    }

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
      iziToast.error({
        title: 'Error',
        message: 'Invalid email address was entered.',
      });
      return;
    }

    const subscriptionData = {
      email: email,
    };

    Api.addSubscription(subscriptionData)
      .then(resp => {
        const message = resp.message;
        iziToast.success({
          title: 'Success',
          message: message,
        });
        btnSubmit.disabled = true;
        emailInput.classList.remove('active');
        btnSubmit.classList.remove('active');
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
