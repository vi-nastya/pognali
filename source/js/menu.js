'use strict';

const header = document.querySelector('.header');
header.classList.remove('header--nojs');

const menuButton = document.querySelector('.header__nav-toggle');

menuButton.addEventListener('click', function () {
  header.classList.toggle('header--open-menu');
  changeLogo();
});
