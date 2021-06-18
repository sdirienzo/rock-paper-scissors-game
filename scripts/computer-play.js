export function computerPlay() {
    //Create an array for all of the computer's possible selections
    const OPTIONS = ["Rock", "Paper", "Scissors"];
    //Randomly generate the computer's selection
    let selection = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    //Return the computer's selection
    return selection;
}