'use strict';

const logoBlue = document.querySelector('.header__logo-image--blue');
const logoWhite = document.querySelector('.header__logo-image--white');

const changeLogo = () => {
  logoBlue.classList.toggle('visually-hidden');
  logoWhite.classList.toggle('visually-hidden');
}

const header = document.querySelector('.header');
header.classList.remove('header--nojs');
header.classList.remove('header--open-menu');

const menuButton = document.querySelector('.header__nav-toggle');

menuButton.addEventListener('click', function () {
  header.classList.toggle('header--white');
  header.classList.toggle('header--open-menu');
  changeLogo();
});


/* Business plans modal */
const businessButton = document.querySelector('.plan__button-business');
const businessModal = document.querySelector('.plan-business');

businessButton.addEventListener('click', function () {
  businessModal.classList.toggle('plan-business--closed')
});
