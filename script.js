function hideImage() {
    var overlay = document.querySelector('.overlay'); /* get the overlay element */
    overlay.classList.add('visible'); /* add the visible class to show the overlay */
    setTimeout(function() {
      var img = document.querySelector('img'); /* get the image element */
      img.style.transform = 'translateY(-100%)'; /* move the image up by 100% of its height to hide it */
    }, 600); /* wait for 0.6 seconds before hiding the image */
  }




/* Caularlate */
  // Get elements
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

// Set initial value of calculator result
let currentValue = '';

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonValue = event.target.textContent;

    if (buttonValue === 'C') {
      // Clear the result
      currentValue = '';
      result.value = '';
    } else if (buttonValue === '=') {
      // Evaluate the expression
      result.value = eval(currentValue);
      currentValue = result.value;
    } else {
      // Add the button value to the expression
      currentValue += buttonValue;
      result.value = currentValue;
    }
  });
});