let computerGuess = 0;
let numberOfGuesses = 0;

let currentMin = 0;
let currentMax = 100;

const btnStart = document.querySelector(".btn__start");

const startArea = document.querySelector(".start");

const buttons = document.querySelector(".buttons");

const btnLow = document.querySelector(".btn__low");

const btnHigh = document.querySelector(".btn__high");

const btnCorrect = document.querySelector(".btn__correct");

const compGuess = document.querySelector(".comp__guess");

const result = document.querySelector(".result");

const playAgain = document.querySelector(".play__again");

// Press start
btnStart.addEventListener("click", () => {
  
  startGame();
});

// Start the game, sets the number interval 0 to 100. Hides the start button, and makes the feedback buttons appear.
function startGame() {
  currentMax = 100;
  currentMin = 0;
  numberOfGuesses = 0;

  // Show the buttons for feedback
  buttons.classList.remove("hide");

  // Hide the start button
  startArea.classList.add("hide");

  // Hide play again button if visible
  playAgain.classList.add("hide");

  // Reset guessed text
  compGuess.textContent = "";

  // Reset result text
  result.textContent = "";
  result.classList.add("hide")

  btnLow.disabled = false;
  btnHigh.disabled = false;

  // Start guessing after 0.3s
  setTimeout(computerGuesses, 300);
}

// the computer writes its guess
function computerGuesses() {
  // If first guess of the game, it selects a random number between 0 and 100, instead of defaulting to guessing 50 every time.
  if (numberOfGuesses === 0) {
    computerGuess = Math.floor(Math.random() * (currentMin + currentMax) + 1);
  } else {
    computerGuess = Math.floor((currentMin + currentMax) / 2);
  }

  compGuess.textContent = `Is it ${computerGuess}?`;
  numberOfGuesses++;

  checkButtons();
}

// Disable buttons that don't make sense to press (if the min and max numbers are the same)
function checkButtons() {
  if (currentMin >= currentMax) {
    btnLow.disabled = true;
    btnHigh.disabled = true;
  }
}

// Too low guess. The + 1 tells the computer to guess numbers higher than what it had just guessed, since it now knows it will be higher. So if 20 is too low, it will guess numbers from 21 to currentMax.
btnLow.addEventListener("click", () => {
  currentMin = computerGuess + 1;
  computerGuesses();
});

// Too high guess
btnHigh.addEventListener("click", () => {
  currentMax = computerGuess - 1;
  computerGuesses();
});

// Correct guess, show result text, show how many times the computer had to guess to find the correct number. Play again button
btnCorrect.addEventListener("click", () => {
  if (numberOfGuesses === 1) {
    result.textContent = `The computer guessed your number ${computerGuess} in the first attempt!! 😎`;
  } else {
    result.textContent = `The computer guessed your number ${computerGuess} in ${numberOfGuesses} attempts!`;
  }
  result.classList.remove("hide")

  // Hide feedback buttons and show play again button
  buttons.classList.add("hide");
  playAgain.classList.toggle("hide");

});

// Play again
playAgain.addEventListener("click", () => {
  // Reset the game and start over
  startGame();
});
