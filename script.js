'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Selecting all needed elements in DOM
const bodyEl = document.querySelector('body');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');
const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

// Start game
checkBtnEl.addEventListener('click', () => {
  const guess = Number(guessEl.value);

  // Where there is no input
  if (!guess) {
    messageEl.textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    messageEl.textContent = '🎉 Correct Number!';
    numberEl.textContent = secretNumber.toString();
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore.toString();
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageEl.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreEl.textContent = score.toString();
    } else {
      messageEl.textContent = 'You lose the game 😓!';
      scoreEl.textContent = '0';
    }
  }
});

// Reset the game
againBtnEl.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageEl.textContent = 'Start guessing...';
  scoreEl.textContent = score.toString();
  numberEl.textContent = '?';
  guessEl.value = '';
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
