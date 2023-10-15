"use strict";

// selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const playerZeroScoreEl = document.querySelector("#score--0");
const playerOneScoreEl = document.querySelector("#score--1");
const playerZeroCurrentScoreEl = document.querySelector("#current--0");
const playerOneCurrentScoreEl = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const newGameBtnEl = document.querySelector(".btn--new");
const rollDiceBtnEl = document.querySelector(".btn--roll");
const holdBtnEl = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// Starting Conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  playerZeroScoreEl.textContent = 0;
  playerOneScoreEl.textContent = 0;
  playerZeroCurrentScoreEl.textContent = 0;
  playerOneCurrentScoreEl.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Functions for roll dice Btn
rollDiceBtnEl.addEventListener("click", () => {
  if (playing === true) {
    //rolling dice
    const randomNum = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `./assets/dice-${randomNum}.png`;

    if (randomNum != 1) {
      // add dice to the current
      currentScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// function for hold button
holdBtnEl.addEventListener("click", () => {
  if (playing === true) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish game
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    } else {
      // Switch to the next player

      switchPlayer();
    }
  }
});

newGameBtnEl.addEventListener("click", init());
