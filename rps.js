const container = document.querySelector(".container")
const buttons = document.querySelectorAll("button")
const results = document.querySelector(".results")
const scoreDiv = document.querySelector(".scores")
// Available choices for the game
const choices = ["rock", "paper", "scissors"];

// Function to get a random choice for the computer
const getRandomChoice = () => {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

// Function to get the user's choice
const getHumanChoice = (e) => {
  let choice = e.target.id
  return choice;
};

// Object to track scores
let scores = {
  computer: 0,
  human: 0,
};

let winner = null

let scoreDisplay = document.createElement("p")

// Function to play a single round
const playRound = (e) => {
  const computerChoice = getRandomChoice();
  const humanChoice = getHumanChoice(e);
  
  if (computerChoice === humanChoice) {
    const tieMessage = document.createElement("p")
    tieMessage.textContent = "It's a tie."
    results.appendChild(tieMessage)
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    const computerWinsMessage = document.createElement("p")
    computerWinsMessage.textContent = `The computer wins because ${computerChoice} beats ${humanChoice}.`
    results.appendChild(computerWinsMessage)
    scores.computer++;
  } else {
    const humanWinsMessage = document.createElement("p")
    humanWinsMessage.textContent = `You win because ${humanChoice} beats ${computerChoice}.`
    results.appendChild(humanWinsMessage)
    scores.human++;
  }

  if (scores.computer === 5) {
    winner = "The computer"
    scoreDisplay.textContent = `The computer wins with a score of ${scores.computer} to ${scores.human}`
    scoreDiv.appendChild(scoreDisplay)
  } else if (scores.human === 5) {
    winner = "You"
    scoreDisplay.textContent = `You win with a score of ${scores.human} to ${scores.computer}`
    scoreDiv.appendChild(scoreDisplay)
  } else {
    scoreDisplay.textContent = `Computer: ${scores.computer}, Human: ${scores.human}`
    scoreDiv.appendChild(scoreDisplay)
  }
};


buttons.forEach(button => 
  button.addEventListener("click", (e) => {
    if (!winner) {
      playRound(e)
    } else {
      scoreDisplay.textContent = `${winner} was the winner. Refresh to play again.`
    }
  })
)



// Function to play the game for 5 rounds and determine the overall winner
// const playGame = () => {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }

//   if (scores.computer > scores.human) {
//     console.log(
//       `The computer wins with a score of ${scores.computer} to ${scores.human}.`
//     );
//   } else if (scores.human > scores.computer) {
//     console.log(
//       `You win with a score of ${scores.human} to ${scores.computer}!`
//     );
//   } else {
//     console.log(`It's a tie! Both scored ${scores.human}.`);
//   }
// };

// Start the game
playGame();
