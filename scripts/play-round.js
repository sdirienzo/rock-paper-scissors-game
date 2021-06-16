function playRound(playerSelection, computerSelection) {
    //Create string constants for player round results
    const PLAYER_WIN_MESSAGE = "You Win!";
    const PLAYER_LOSE_MESSAGE = "You Lose!";
    const DRAW_MESSAGE = "You Draw!";
    //Create string constants for round resulting in a winner
    const ROCK_BEATS_SCISSORS_MESSAGE = "Rock beats Scissors";
    const SCISSORS_BEAT_PAPER_MESSAGE = "Scissors beat Paper";
    const PAPER_BEATS_ROCK_MESSAGE = "Paper beats Rock";
    //Create string constants for round resulting in draw 
    const ROCK_TIES_ROCK_MESSAGE = "Rock ties Rock";
    const SCISSORS_TIE_SCISSORS_MESSAGE = "Scissors tie Scissors";
    const PAPER_TIES_PAPER_MESSAGE = "Paper ties Paper";
    
    //Create string variable to store result of round
    let result;

    //Determine winner based on player's selection
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissors") {
                result = `${PLAYER_WIN_MESSAGE} ${ROCK_BEATS_SCISSORS_MESSAGE}`;
            } else if (computerSelection === "Paper") {
                result = `${PLAYER_LOSE_MESSAGE} ${PAPER_BEATS_ROCK_MESSAGE}`;
            } else {
                result = `${DRAW_MESSAGE} ${ROCK_TIES_ROCK_MESSAGE}`;
            }
            break;
        case "Paper":
            if (computerSelection === "Scissors") {
                result = `${PLAYER_LOSE_MESSAGE} ${SCISSORS_BEAT_PAPER_MESSAGE}`;
            } else if (computerSelection === "Rock") {
                result = `${PLAYER_WIN_MESSAGE} ${PAPER_BEATS_ROCK_MESSAGE}`
            } else {
                result = `${DRAW_MESSAGE} ${PAPER_TIES_PAPER_MESSAGE}`;
            }
            break;
        case "Scissors":
            if (computerSelection === "Rock") {
                result = `${PLAYER_LOSE_MESSAGE} ${ROCK_BEATS_SCISSORS_MESSAGE}`;
            } else if (computerSelection === "Paper") {
                result = `${PLAYER_WIN_MESSAGE} ${SCISSORS_BEAT_PAPER_MESSAGE}`;
            } else {
                result = `${DRAW_MESSAGE} ${SCISSORS_TIE_SCISSORS_MESSAGE}`;
            }
            break;
        default:
            result = "Something terrible has happened!";
            break;
    }

    //Return result of round
    return result;
}