// Lav et program der generer et tilfældigt tal mellem 0 og 100.

// Brugeren skal herefter gætte tallet ved at taste det ind i et inputfelt og trykke på en knap.

// Programmet skal herefter give feedback om tallet er for højt, for lavt eller om tallet er gættet.

// Når tallet bliver gættet skal der være en fejringsgrafik/animation

// Og husk:

// Det skal virke

// Det skal se godt ud

// Det skal give relevant feedback

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guess = document.querySelector(".guess");

const notCorrect = document.querySelector(".not-correct");

const correct = document.querySelector(".correct");

const guessBtn = document.querySelector(".guessBtn");

const userInput = document.querySelector("input");

console.log(randomNumber);

function checkGuess() {
  const userGuess = Number(userInput.value);
  const jsConfetti = new JSConfetti();

  // This is used for calculating the difference between the user's guess to the actual target number
  const difference = Math.abs(userGuess - randomNumber);

  if (userGuess === randomNumber) {
    correct.textContent = "Hooray! This is correct!";
    correct.style.backgroundColor = "green";
    correct.style.padding = "2em";
    jsConfetti.addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸", "💫", "🌈" ],
    });
  } else if (userGuess < randomNumber) {
    notCorrect.textContent = "Oh no! Your guess is too low!";
  } else {
    notCorrect.textContent = "Oh no! Your guess is too high!";
  }

  // Give additional hints based on the difference
  if (difference <= 3 && difference !== 0) {
    notCorrect.textContent = " 🔥🔥🔥 You're very close! 🔥🔥🔥";
    notCorrect.style.underline;
  } else if (difference <= 10 && difference !== 0) {
    notCorrect.textContent = " 🔥 You're getting closer! 🔥 ";
  }

  userInput.value = ""; // this empties the input area
  userInput.focus(); // and this keeps the input area in focus for writing the new guess
}

guessBtn.addEventListener("click", checkGuess);
