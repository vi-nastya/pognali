'use strict';
/* Hide country filters */
const filters = document.querySelector('.country-filters');
const hideFiltersTop = filters.querySelector('.country-filters__button--hide');

const hideFilters = () => {
  filters.classList.add('country-filters--collapsed');
}

hideFiltersTop.addEventListener('click', hideFilters);
