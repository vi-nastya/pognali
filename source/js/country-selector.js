'use strict';

const countrySelectButton = document.querySelector('.country-select--empty');
const countrySelector = document.querySelector('.country-selector');

countrySelectButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  countrySelector.classList.toggle('country-selector--hidden');
  countrySelectButton.classList.toggle('country-select--active');
})
