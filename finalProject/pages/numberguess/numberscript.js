const randomNumber = Math.floor(Math.random() * 100) + 1;
let turnsLeft = 10;

const turnsLeftSpan = document.getElementById("turns-left");
const userGuessInput = document.getElementById("user-guess");
const submitGuessButton = document.getElementById("submit-guess");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-button");

submitGuessButton.addEventListener("click", function() {
  const userGuess = Number(userGuessInput.value);
  
  if (userGuess === randomNumber) {
    resultMessage.textContent = `Congratulations! You guessed the number ${randomNumber} correctly.`;
    endGame();
  } else {
    turnsLeft--;
    turnsLeftSpan.textContent = turnsLeft;
    
    if (turnsLeft === 0) {
      resultMessage.textContent = `Game over. The number was ${randomNumber}.`;
      endGame();
    } else {
      resultMessage.textContent = userGuess > randomNumber ? "Too high." : "Too low.";
      userGuessInput.value = "";
    }
  }
});

function endGame() {
  userGuessInput.disabled = true;
  submitGuessButton.disabled = true;
  restartButton.style.display = "block";
}

restartButton.addEventListener("click", function() {
  location.reload();
});
