'use strict';

/* Business plans modal */
const businessButton = document.querySelector('.plan__button-business');
const businessModal = document.querySelector('.plan-business');
const businessModalClose = businessModal.querySelector('.plan__button-close');

businessButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  businessModal.classList.toggle('plan-business--closed');
});

businessModalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  businessModal.classList.toggle('plan-business--closed');
})
