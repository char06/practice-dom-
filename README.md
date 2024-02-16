# Modal Window JavaScript Code README

## Overview

This JavaScript code controls the behavior of a modal window on a webpage. A modal window is a dialog box or popup window that appears on top of the current page content and requires user interaction before the user can return to the original content.

The code includes functionality to display the modal window when certain elements are clicked and to close the modal window when a close button is clicked.

## Files

- **index.html**: Contains the HTML structure of the webpage.
- **styles.css**: Contains the CSS styling for the webpage.
- **script.js**: Contains the JavaScript code for controlling the modal window behavior.

## Code Explanation

### 1. Setting up the Modal Elements

- The JavaScript code selects necessary elements from the DOM:
  - `.modal`: Represents the modal window itself.
  - `.overlay`: Represents the overlay that covers the page when the modal is active.
  - `.close-modal`: Represents the close button within the modal.
  - `.show-modal`: Represents the buttons or elements that trigger the display of the modal when clicked.

### 2. Event Listeners

- The code sets up event listeners:
  - **For Loop**: Iterates through all elements with the class `.show-modal` and attaches a click event listener to each. When one of these elements is clicked, the modal window and overlay are displayed by removing the `hidden` class from their respective elements.
  - **Close Button**: Attaches a click event listener to the close button. When clicked, it hides the modal window and overlay by adding the `hidden` class to both elements.

### 3. Console Logging

- The code logs messages to the console:
  - `"button clicked"`: Logged when a button with the class `.show-modal` or the close button is clicked. This helps with debugging and tracking user interactions.

## Usage

To incorporate this code into your webpage:

1. Ensure that your HTML file includes elements with the appropriate classes: `.modal`, `.overlay`, `.close-modal`, and `.show-modal`.
2. Link the `script.js` file to your HTML file using the `<script>` tag.
3. Make sure your CSS file styles the modal window and overlay appropriately.

<img width="1035" alt="Screenshot 2024-02-16 at 12 28 25 PM" src="https://github.com/char06/practice-dom-/assets/24831449/96f3d512-53ab-4738-b48d-36e408ec8b7f">

