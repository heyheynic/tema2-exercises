// animationend on the shakes
// classList add/remove

"use strict";
let userGuess;
let computerGuess;
let result;

// .rock, .paper, .scissor

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// computer rock, paper and scissor
const compRock = 1;
const compPaper = 2;
const compScissors = 3;

// texts
const draw = document.querySelector("#draw");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

// shake animation
let players = document.querySelectorAll(".player");
let player1 = document.querySelector("#player1");
let computer = document.querySelector("#player2");

// adventlistener for the rock, paper, scissor buttons
rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);


function startGame() {
  console.log("startGame");
  player1.classList.remove("rock", "paper", "scissors");
  computer.classList.remove("rock", "paper", "scissors");
}

function rockClicked() {
  players.forEach((player) => {
    player.classList.add("shake");

    // Wait for shake animation to end before adding .rock class and removing .shake and eventual previous classes
    player1.addEventListener("animationend", () => {
      player1.classList.remove("shake", "paper", "scissors");
      player1.classList.add("rock");
    });
  });

  userGuess = "rock";
  computerGuesses();
}

function paperClicked() {
  players.forEach((player) => {
    player.classList.add("shake");

    // Wait for shake animation to end before adding .paper class and removing .shake and eventual previous classes
    player1.addEventListener("animationend", () => {
      player1.classList.remove("shake", "rock", "scissors");
      player1.classList.add("paper");
    });
  });
  userGuess = "paper";
  computerGuesses();
}

function scissorsClicked() {
  players.forEach((player) => {
    player.classList.add("shake");

    // Wait for shake animation to end before adding .scissors class and removing .shake and eventual previous classes
    player1.addEventListener("animationend", () => {
      player1.classList.remove("shake", "rock", "paper");
      player1.classList.add("scissors");
    });
  });

  userGuess = "scissors";
  computerGuesses();
}

function computerGuesses() {
  // Generate a random number between 1 and 3
  computerGuess = Math.floor(Math.random() * 3) + 1;

  computer.addEventListener("animationend", () => {
    computer.classList.remove("shake");
    if (computerGuess === compRock) {
      computer.classList.add("rock");
      // vs userGuess
      if (userGuess === "rock" && computerGuess === compRock) {
        draw.classList.remove("hidden");
        result = "draw";
      }
      if (userGuess === "paper" && computerGuess === compRock) {
        win.classList.remove("hidden");
        result = "user";
      }
      if (userGuess === "scissors" && computerGuess === compRock) {
        lose.classList.remove("hidden");
        result = "computer";
      }
    } else if (computerGuess === compPaper) {
      computer.classList.add("paper");
      // vs userGuess
      if (userGuess === "rock" && computerGuess === compPaper) {
        lose.classList.remove("hidden");
        result = "computer";
      }
      if (userGuess === "paper" && computerGuess === compPaper) {
        draw.classList.remove("hidden");
        result = "draw";
      }
      if (userGuess === "scissors" && computerGuess === compPaper) {
        win.classList.remove("hidden");
        result = "user";
      }
    } else if (computerGuess === compScissors) {
      computer.classList.add("scissors");
      // vs userGuess
      if (userGuess === "rock" && computerGuess === compScissors) {
        win.classList.remove("hidden");
        result = "user";
      }
      if (userGuess === "paper" && computerGuess === compScissors) {
        lose.classList.remove("hidden");
        result = "computer";
      }
      if (userGuess === "scissors" && computerGuess === compScissors) {
        draw.classList.remove("hidden");
        result = "draw";
      }
    }
  });

  console.log("Computer guesses", computerGuess);
  console.log("User guesses:", userGuess);
  resetGame();
}

function resetGame() {
  removeEventListener(computer, player1);
  win.classList.add("hidden");
  draw.classList.add("hidden");
  lose.classList.add("hidden");

  startGame();
}

