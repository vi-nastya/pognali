'use strict';

const logoBlue = document.querySelector('.header__logo-image--blue');
const logoWhite = document.querySelector('.header__logo-image--white');

const changeLogo = () => {
  logoBlue.classList.toggle('visually-hidden');
  logoWhite.classList.toggle('visually-hidden');
}

const header = document.querySelector('.header');
header.classList.remove('header--nojs');

const menu = document.querySelector('.nav-menu');
menu.classList.remove('header__nav--open');

const menuButton = document.querySelector('.header__nav-toggle');

menuButton.addEventListener('click', function () {
  header.classList.toggle('header--white');
  menu.classList.toggle('header__nav--open');
  changeLogo();
});
