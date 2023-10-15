"use strict";

// selecting elements
const playerZeroScoreEl = document.querySelector("#score--0");
const playerOneScoreEl = document.querySelector("#score--1");
const playerZeroCurrentScoreEl = document.querySelector("#current--0");
const playerOneCurrentScoreEl = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const newGameBtnEl = document.querySelector(".btn--new");
const rollDiceBtnEl = document.querySelector(".btn--roll");
const holdBtnEl = document.querySelector(".btn--hold");

let currentScore = 0;

// Starting Conditions
playerZeroScoreEl.textContent = 0;
playerOneScoreEl.textContent = 0;
diceEl.classList.add("hidden");

// Functions
rollDiceBtnEl.addEventListener("click", () => {
  //rolling dice
  const randomNum = Math.floor(Math.random() * 6) + 1;
  console.log(randomNum);

  diceEl.classList.remove("hidden");
  diceEl.src = `./assets/dice-${randomNum}.png`;

  if (randomNum != 1) {
    // add dice to the current
    currentScore += randomNum;
    playerZeroCurrentScoreEl.textContent = currentScore; // Change Later
  } else {
    // switch to next player
  }
});
