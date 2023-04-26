const form = document.querySelector('form');
const cardNumberInput = document.getElementById('cardNumber');
const expirationDateInput = document.getElementById('expirationDate');
const cvvInput = document.getElementById('cvv');
const cardHolderNameInput = document.getElementById('cardHolderName');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cardNumber = cardNumberInput.value;
  const expirationDate = expirationDateInput.value;
  const cvv = cvvInput.value;
  const cardHolderName = cardHolderNameInput.value;

  // Payment processing logic
  if (cardNumber.trim() === '' || expirationDate.trim() === '' || cvv.trim() === '' || cardHolderName.trim() === '') {
    alert('Please fill in all the fields.');
  } else if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    alert('Invalid card number.');
  } else if (!expirationDate.match(/^([0-9]{2})\/([0-9]{2})$/)) {
    alert('Invalid expiration date. Please enter in MM/YY format.');
  } else if (cvv.length !== 3 || isNaN(cvv)) {
    alert('Invalid CVV.');
  } else {
    // Payment successful
    alert('Payment successful. Thank you!');
    form.reset();
  }
});
