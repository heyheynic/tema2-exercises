// use ".shake" to add shaking class animation when you play
// animationend on the shakes
//classList add/remove
// math.random()
// math.floor()

"use strict";
let userGuess;
let computerGuess;
let result;

// .rock, .paper, .scissor
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// shake animation
let players = document.querySelectorAll(".player");
let player1 = document.querySelector("#player1");

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

// Rock > scissor
// Scissor > paper
// Paper > rock

function rockClicked() {
  //   console.log("rock clicked");
  players.forEach((player) => {
    player.classList.add("shake");
  });

  player.classList.add("rock");

  userGuess = "rock";

  computerGuesses();
}

function paperClicked() {
  //   console.log("paper clicked");
  players.forEach((player) => {
    player.classList.add("shake");

    // Wait for shake animation to end before adding .paper class and removing .shake
    player1.addEventListener("animationend", () => {
      player1.classList.remove("shake");
      player1.classList.add("paper");
    });
  });
  userGuess = "paper";
  computerGuesses();
  determinWinner();
}

function scissorsClicked() {
  //   console.log("scissors clicked");
  players.forEach((player) => {
    player.classList.add("shake");

     // Wait for shake animation to end before adding .scissors class and removing .shake
     player1.addEventListener("animationend", () => {
        player1.classList.remove("shake");
        player1.classList.add("scissors");
      });
  });

  userGuess = "scissors";
  computerGuesses();
}

function computerGuesses() {
  computerGuess = "rock";
  console.log("Computer guesses rock");
  console.log("User guesses:", userGuess);
  determinWinner();
}

function determinWinner() {
  // rock
  if (userGuess === "rock" && computerGuess === "rock") {
    result = "draw";
  }
  if (userGuess === "rock" && computerGuess === "paper") {
    result = "computer";
  }
  if (userGuess === "rock" && computerGuess === "scissors") {
    result = "user";
  }

  // paper
  if (userGuess === "paper" && computerGuess === "paper") {
    result = "draw";
  }
  if (userGuess === "paper" && computerGuess === "rock") {
    result = "user";
  }
  if (userGuess === "paper" && computerGuess === "scissors") {
    result = "computer";
  }

  // scissor
  if (userGuess === "scissors" && computerGuess === "scissors") {
    result = "draw";
  }
  if (userGuess === "scissors" && computerGuess === "paper") {
    result = "user";
  }
  if (userGuess === "scissors" && computerGuess === "rock") {
    result = "user";
  }
}
