'use strict';

/* Business plans modal */
const businessButton = document.querySelector('.plan__button-business');
const businessModal = document.querySelector('.plan-business');

businessButton.addEventListener('click', function () {
  businessModal.classList.toggle('plan-business--closed')
});
