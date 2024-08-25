document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".game-controls button");
  const resultsContainer = document.querySelector(".results");
  const scoreDisplay = document.querySelector(".scores");

  const choices = ["rock", "paper", "scissors"];
  let scores = { computer: 0, human: 0 };
  let winner = null;

  const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

  const playRound = (e) => {
    if (winner) return;

    const computerChoice = getRandomChoice();
    const humanChoice = e.target.id;

    const resultMessage = document.createElement("p");
    if (computerChoice === humanChoice) {
      resultMessage.textContent = "It's a tie.";
    } else if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      resultMessage.textContent = `The computer wins because ${computerChoice} beats ${humanChoice}.`;
      scores.computer++;
    } else {
      resultMessage.textContent = `You win because ${humanChoice} beats ${computerChoice}.`;
      scores.human++;
    }

    resultsContainer.appendChild(resultMessage);
    updateScores();
  };

  const updateScores = () => {
    if (scores.computer === 5 || scores.human === 5) {
      winner = scores.computer === 5 ? "The computer" : "You";
      scoreDisplay.textContent = `${winner} wins with a score of ${scores.computer} to ${scores.human}. Refresh to play again.`;
    } else {
      scoreDisplay.textContent = `Computer: ${scores.computer}, Human: ${scores.human}`;
    }
  };

  buttons.forEach((button) => button.addEventListener("click", playRound));
});
