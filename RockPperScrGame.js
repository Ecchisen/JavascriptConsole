let round = 1;
let computerWins = 0;
let userWins = 0;

console.log("Console based rock, paper, scissor game.\n");


function Gamestart() {

while (round <= 3) {
    console.log(`\nGame stats:\nRound = ${round}`);

    let input = window.prompt("Enter 'R' for rock, 'P' for paper, & 'S' for scissor: ").toLowerCase();

    if (input !== 'r' && input !== 'p' && input !== 's') {
        console.log("Invalid input. Exiting...");
        break;
    }

    const userChoiceNum = input === 'r' ? 1 : input === 'p' ? 2 : 3;
    const computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    const computerChoice = computerChoiceNum === 1 ? 'r' : computerChoiceNum === 2 ? 'p' : 's';

    console.log(`You chose: ${input}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (
        (userChoiceNum === 1 && computerChoiceNum === 3) ||
        (userChoiceNum === 2 && computerChoiceNum === 1) ||
        (userChoiceNum === 3 && computerChoiceNum === 2)
    ) {
        console.log("Congratulations! You won.");
        userWins++;
    } else if (userChoiceNum === computerChoiceNum) {
        console.log("It's a tie.!!");
    } else {
        console.log("Sorry you've lost!!");
        computerWins++;
    }

    console.log(`Computer Wins = ${computerWins}\nUser Wins = ${userWins}\n`);
    round++;
}

console.log("\nFinal Game Stats:");
console.log(`Total Rounds: ${round - 1}`);
console.log(`Computer Wins: ${computerWins}`);
console.log(`User Wins: ${userWins}`);
if (userWins > computerWins) {
    console.log("Overall Winner: You!\n");
} else if (userWins < computerWins) {
    console.log("Overall Winner: Computer!\n");
} else {
    console.log("Overall Result: It's a tie!\n");
}

}

Gamestart();
