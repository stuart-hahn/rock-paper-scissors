# Rock Paper Scissors Game

This is a simple implementation of the classic Rock Paper Scissors game built with JavaScript. The game is played entirely in the console and allows the player to compete against the computer in a best-of-five series.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How to Play](#how-to-play)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Improvements](#improvements)

## Introduction

This project is part of The Odin Project's Foundations Course. It is a basic JavaScript application designed to practice essential programming concepts like functions, loops, conditionals, and user interaction via the console.

## Features

- Play a best-of-five series against the computer.
- Receive feedback on each round, including the choice made by the computer and whether the round was won, lost, or tied.
- View the final result after five rounds, showing who won or if the game was tied.

## How to Play

1. **Open the Console:** When you load the HTML file, an alert will instruct you to open the console. You can do this by right-clicking the webpage and selecting "Inspect" or by pressing `F12` and then navigating to the "Console" tab.

2. **Input Your Choice:** When prompted, type your choice of `rock`, `paper`, or `scissors` into the prompt that appears and press Enter.

3. **View Results:** After each round, the result will be logged to the console, showing whether you won, lost, or tied.

4. **Final Outcome:** After 5 rounds, the final scores will be displayed in the console, and the overall winner will be declared.

## How It Works

- **Choices:** The game offers three choices: rock, paper, or scissors.
- **Computer's Choice:** The computer randomly selects its choice using a random number generator.
- **User's Choice:** The user is prompted to input their choice. Invalid inputs are rejected, and the user is re-prompted until a valid choice is made.
- **Scorekeeping:** Scores are tracked for both the user and the computer, with a point awarded to the winner of each round.
- **Game Rounds:** The game consists of 5 rounds, after which the final score is compared, and the winner is announced.

## Getting Started

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Follow the on-screen instructions to open the console and start the game.

## Improvements

This basic implementation can be enhanced with the following features:

- **Graphical User Interface (GUI):** Add buttons and visual elements to replace the console prompts and display the game outcome more interactively.
- **More Rounds:** Allow the user to choose the number of rounds they wish to play.
- **Detailed Statistics:** Track and display detailed statistics, such as win/loss ratios, average round time, etc.
- **Multiplayer Mode:** Extend the game to support two human players.
- **Animations and Sound Effects:** Enhance the game experience by adding animations and sound effects when the user wins, loses, or ties a round.

## License

This project is open-source and available for free under the MIT License.
