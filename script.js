'use strict'; // Enforces strict mode for better error handling and secure JavaScript code.

// Selecting DOM elements
const modal = document.querySelector('.modal'); // Selects the modal element
const overlay = document.querySelector('.overlay'); // Selects the overlay element
const btncloseModal = document.querySelector('.close-modal'); // Selects the close button element
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Selects all elements with the class 'show-modal' and returns a node list
console.log(btnsOpenModal); // Logs the NodeList containing elements with class 'show-modal'

// Adding event listeners to all elements with the class 'show-modal'
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('button clicked'); // Logs a message when a button is clicked
    // Removes the 'hidden' class from the modal and overlay elements to display them
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// Adding event listener to the close button element
btncloseModal.addEventListener('click', function () {
  console.log('button clicked'); // Logs a message when the close button is clicked
  // Adds the 'hidden' class to the modal and overlay elements to hide them
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
