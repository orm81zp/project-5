window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  var sticky = header.offsetTop;

  if (window.scrollY > sticky) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});
