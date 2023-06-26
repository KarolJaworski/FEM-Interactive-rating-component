const buttons = document.querySelectorAll('.rating-btn');
const submitButton = document.querySelector('.js-submit-btn');
const content = document.querySelector('.card-content');
let rating;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    rating = button.textContent;

    buttons.forEach(button => {
      button.classList.remove('rating-btn-selected');
    });

    button.classList.add('rating-btn-selected');
  });
});

submitButton.addEventListener('click', () => {
  content.innerHTML = `
  <div class="box">
    <img src="./images/illustration-thank-you.svg" alt="thankyou img" class="ty-img">
    <p class="rating-amount-txt">You selected ${rating} out of 5</p>
    <div class="ty-text">
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating.
      If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  </div>`;
});