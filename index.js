const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');
//invalid imput
const invalidInputMessage = document.getElementById('invalid-input');
let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;
// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  //adding invalid imput
  if (isNaN(guess) || guess < 1 || guess > 99) {
    hideAllMessages();
    invalidInputMessage.style.display = '';
    return;
}
  attempts = attempts + 1;
  hideAllMessages();
  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.textContent = `You made ${attempts} guesses`;
    correctMessage.style.display = '';
    submitButton.disabled = true;
    guessInput.disabled = true;
    //incorrect message display for too high guess and too low. have changed
  } else {
  if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else {
      tooHighMessage.style.display = '';
    }
    const remainingAttempts = maxNumberOfAttempts - attempts;
    numberOfGuessesMessage.style.display = '';
    //changed to make correct spelling of plural and singular word "guess" and "guesses"
    numberOfGuessesMessage.textContent = `You guessed ${guess}. ${remainingAttempts} ${remainingAttempts === 1 ? 'guess' : 'guesses'} remaining`;
//fixed the typo   if (attempts ==== maxNumberOfAttempts) {
  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
    //added message
    maxGuessesMessage.style.display = '';
  }
}
  guessInput.value = '';
  resetButton.style.display = '';
}
function hideAllMessages() {
  for (let elementIndex = 0; elementIndex <messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}
//fixed typo funtion setup() {
function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);
  // Reset number of attempts
  //fixed incorrect assigment maxNumberOfAttempts = 0;
 attempts = 0;
  // Enable the input and submit button
  //fixing typo  submitButton.disabeld = false;
  submitButton.disabled = false;
  guessInput.disabled = false;
  hideAllMessages();
  resetButton.style.display = 'none';
}
submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);
setup();