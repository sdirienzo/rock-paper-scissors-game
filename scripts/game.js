import { computerPlay } from "./computer-play.js";
import { playRound } from "./play-round.js";

function game() {
    //Create int variable to store number of rounds to play
    const ROUNDS_TO_PLAY = 5;
    //Create int variable to store number of rounds player wins
    let playerRoundsWon = 0;
    //Create int variable to store number of rounds computer wins
    let computerRoundsWon = 0;
    //Create int variable to store value that will be incremented each round
    let index = 0;
    //Play rounds until reach number of rounds to play
    do {
        //Ask user to select Rock, Paper, or Scissors and store it
        let playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
        //Check if player entered a valid selection and continue if so, else prompt again
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            //Generate computer's Rock, Paper, Scissors selection and store it
            let computerSelection = computerPlay();
            //Play round and store the result
            let result = playRound(playerSelection, computerSelection);
            //Display the result of the round
            console.log(result);
            //If not a draw, determine who won and increment number of rounds won for winner
            if (!result.includes("Draw")) {
                if (result.includes("Win")) {
                    playerRoundsWon++;
                } else {
                    computerRoundsWon++;
                }
                //Increment the number of rounds played
                index++;
            }
        }
    } while (index < ROUNDS_TO_PLAY);
    //Compare number of wins and declare a winner
    if (playerRoundsWon > computerRoundsWon) {
        console.log(`Congratulations! You won ${playerRoundsWon} to ${computerRoundsWon}.`);
    } else {
        console.log(`Better luck next time! You lost ${playerRoundsWon} to ${computerRoundsWon}.`);
    }
    return;
}
//Start game
game();