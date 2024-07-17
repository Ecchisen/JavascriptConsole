//creating rock paper scissor game in JavaScipt for theodinproject...


function getHumanChoice() {
    let choice = window.prompt("Enter 'R' for rock, 'P' for paper, & 'S' for scissor: ").toLowerCase();
    while (choice !== 'r' && choice !== 'p' && choice !== 's') {
        console.log("Invalid input. Please enter 'R' for rock, 'P' for paper, or 'S' for scissor.");
        choice = window.prompt("Enter 'R' for rock, 'P' for paper, & 'S' for scissor: ").toLowerCase();
    }
    return choice;
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    const choices = { 'r': 1, 'p': 2, 's': 3 };
    const humanChoiceNum = choices[humanChoice];
    const computerChoiceNum = choices[computerChoice];

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (
        (humanChoiceNum === 1 && computerChoiceNum === 3) ||  // Rock beats Scissors
        (humanChoiceNum === 2 && computerChoiceNum === 1) ||  // Paper beats Rock
        (humanChoiceNum === 3 && computerChoiceNum === 2)     // Scissors beats Paper
    ) {
        return "You won!";
    } else if (humanChoiceNum === computerChoiceNum) {
        return "It's a tie!";
    } else {
        return "You lost!";
    }
}

let rounds = 3;
let computerWins = 0;
let userWins = 0;

for (let i = 0; i < rounds; i++) {
    console.log(`\nRound ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    console.log(result);
    if (result === "You won!") {
        userWins++;
    } else if (result === "You lost!") {
        computerWins++;
    }
    console.log(`Computer Wins = ${computerWins}\nUser Wins = ${userWins}\n`);
}

console.log("\nFinal Game Stats:");
console.log(`Total Rounds: ${rounds}`);
console.log(`Computer Wins: ${computerWins}`);
console.log(`User Wins: ${userWins}`);
if (userWins > computerWins) {
    console.log("Overall Winner: You!\n");
} else if (userWins < computerWins) {
    console.log("Overall Winner: Computer!\n");
} else {
    console.log("Overall Result: It's a tie!\n");
}
