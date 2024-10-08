//Chooses a random value for the computer
function getComputerChoice () {
	let choice = Math.floor(Math.random() * 3);
	let computerChoice = "rock";
	if (choice === 0) {
		computerChoice = "rock";
	}
	else if (choice === 1) {
		computerChoice = "paper";
	}
	else {
		computerChoice = "scissors";
	}
	return computerChoice;
}
//Prompts user input for rock, paper or scissors
function getHumanChoice () {
	let choice = "rock"
	let button_pressed = event.target;

	switch(button_pressed.id) {
		case "rock-btn":
			choice = "rock";
			break;
		case "paper-btn":
			choice = "paper";
			break;
		case "scissors-btn":
			choice = "scissors";
			break;
	}
	
	return choice;
}

function getImage(choice) {
	let src = "rock.png"

	if (choice === "rock") {
		src ="rock.png";
	}
	else if (choice === "paper") {
		src = "paper.png";
	}
	else if (choice === "scissors") {
		src = "scissors.png";
	}
	else {
		console.log("Error")
	}
	return src;
}

//Plays a round of the game
function playRound (choice1, choice2) {
	let result_announcement = document.querySelector("#announcement-display");

	if (choice1 === choice2) {
		result_announcement.textContent = "It's a tie!";
	}
	else if (choice1 === "rock" && choice2 === "paper") {
		result_announcement.textContent = "Paper beats rock, you lose this round!"
		losses++;
	}
	else if (choice1 === "rock" && choice2 === "scissors") {
		result_announcement.textContent = "Rock beats scissors, you win this round!"
		wins++;
	}
	else if (choice1 === "paper" && choice2 === "rock") {
		result_announcement.textContent = "Paper beats rock, you win this round!"
		wins++;
	}
	else if (choice1 === "paper" && choice2 === "scissors") {
		result_announcement.textContent = "Scissors beats paper, you lose this round!"
		losses++;
	}
	else if (choice1 === "scissors" && choice2 === "rock") {
		result_announcement.textContent = "Rock beats scissors, you lose this round!"
		losses++;
	}
	else if (choice1 === "scissors" && choice2 === "paper") {
		result_announcement.textContent = "Scissors beats paper, you win this round!"
		wins++;
	}
	else {
		console.log("Error")
	}

	let wins_ele = document.querySelector("#wins-display");
	wins_ele.textContent = "Wins: "+wins+" Losses: "+losses
}

//Plays out five rounds of the game and announces a winner
function playGame() {
	let compChoice = null;
	let humanChoice = null;
	const your_pic = document.querySelector("#your-pic");
	const comp_pic = document.querySelector("#comp-pic")

	compChoice = getComputerChoice();
	humanChoice = getHumanChoice();
	your_pic.src = getImage(humanChoice);
	comp_pic.src = getImage(compChoice);
	console.log(`The computer chose ${compChoice}.`)
	playRound(humanChoice,compChoice);

}

let losses = 0;
let wins = 0;
const button_reader = document.querySelector("#button-container");
button_reader.addEventListener("click", playGame);
