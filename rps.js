alert("To play Rock Paper Scissors, open the console.");

// Available choices for the game
const choices = ["rock", "paper", "scissors"];

// Function to get a random choice for the computer
const getRandomChoice = () => {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

// Function to get the user's choice
const getHumanChoice = () => {
  let choice;
  do {
    choice = prompt("Type rock, paper, or scissors: ").toLowerCase();
  } while (!choices.includes(choice)); // Repeat until a valid choice is entered
  return choice;
};

// Object to track scores
let scores = {
  computer: 0,
  human: 0,
};

// Function to play a single round
const playRound = () => {
  const computerChoice = getRandomChoice();
  const humanChoice = getHumanChoice();

  if (computerChoice === humanChoice) {
    console.log("It's a tie!");
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log(
      `The computer wins because ${computerChoice} beats ${humanChoice}.`
    );
    scores.computer++;
  } else {
    console.log(`You win because ${humanChoice} beats ${computerChoice}.`);
    scores.human++;
  }
};

// Function to play the game for 5 rounds and determine the overall winner
const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (scores.computer > scores.human) {
    console.log(
      `The computer wins with a score of ${scores.computer} to ${scores.human}.`
    );
  } else if (scores.human > scores.computer) {
    console.log(
      `You win with a score of ${scores.human} to ${scores.computer}!`
    );
  } else {
    console.log(`It's a tie! Both scored ${scores.human}.`);
  }
};

// Start the game
playGame();
