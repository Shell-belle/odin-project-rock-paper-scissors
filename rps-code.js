//Chooses a random value for the computer
function getComputerChoice () {
	let choice = Math.floor(Math.random() * 3);
	if (choice === 0) {
		return "rock";
	}
	else if (choice === 1) {
		return "paper";
	}
	else {
		return "scissors";
	}
}

//Prompts user input for rock, paper or scissors
function getHumanChoice () {
	let choice = " "
	while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
		choice = prompt("Choose rock, paper, or scissors. The game is played five times, and then an overall winner is chosen. Check the console for results.");
		choice = choice.toLowerCase();
		if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
			console.log("Invalid option.");
		}
		else {
			console.log(`You chose ${choice}!`);
		}
	}
	return choice;
}

//Plays a round of the game
function playRound (choice1, choice2) {
	roundsPlayed++;
	if (choice1 === choice2) {
		console.log("It's a tie!");
		return;
	}
	else if (choice1 === "rock" && choice2 === "paper") {
		console.log("Paper beats rock, you lose this round!")
		losses++;
		return;
	}
	else if (choice1 === "rock" && choice2 === "scissors") {
		console.log("Rock beats scissors, you win this round!")
		wins++;
		return;
	}
	else if (choice1 === "paper" && choice2 === "rock") {
		console.log("Paper beats rock, you win this round!")
		wins++;
		return;
	}
	else if (choice1 === "paper" && choice2 === "scissors") {
		console.log("Scissors beats paper, you lose this round!")
		losses++;
		return;
	}
	else if (choice1 === "scissors" && choice2 === "rock") {
		console.log("Rock beats scissors, you lose this round!")
		losses++;
		return;
	}
	else if (choice1 === "scissors" && choice2 === "paper") {
		console.log("Scissors beats paper, you win this round!")
		wins++;
		return;
	}
	else {
		console.log("Error")
		return;
	}
}

//Plays out five rounds of the game and announces a winner
function playGame() {
	let compChoice = null;
	let humanChoice = null;

	losses = 0;
	wins = 0;
	roundsPlayed = 0;

	while (roundsPlayed < 5 ) {
		compChoice = getComputerChoice();
		humanChoice = getHumanChoice();
		console.log(`The computer chose ${compChoice}.`)
		playRound(humanChoice,compChoice);
	}

	if (wins > losses) {
		console.log("You win overall!");
	}
	else if (wins < losses) {
		console.log("You lose overall!");
	}
	else {
		console.log("It's a tie overall!");
	}
}

let losses = 0;
let wins = 0;
let roundsPlayed = 0;

playGame();