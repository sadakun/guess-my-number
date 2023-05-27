"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 100;
document.querySelector(".guess").value = 70;
*/

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (scores) {
  document.querySelector(".score").textContent = scores;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "🚀 No number";
    displayMessage("🚀 No number");

    //when win the game
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // document.querySelector(".message").textContent = "Correct Number";
    displayMessage("👌 Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "100vw";
    document.querySelector(".number").textContent = secretNumber;

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = guess > secretNumber ? "Too high!" : "Too low!";
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      // document.querySelector(".score").textContent = score;
      displayScore(score);
    } else {
      // document.querySelector(".message").textContent = "Game Over";
      displayMessage("😵 Game Over");
      // document.querySelector(".score").textContent = 0;
      displayScore(0);
    }
  }
  //when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".guess").value = "";
  // document.querySelector(".score").textContent = score;
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  // document.querySelector(".message").textContent = "Start guessing. . .";
  displayMessage("Start guessing. . .");
});
