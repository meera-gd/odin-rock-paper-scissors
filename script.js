let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let choice = Math.random();
	if (choice < 1/3) {
		return 'rock';
	} else if (choice < 2/3) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

const results = document.querySelector('#results');

function playRound(humanChoice, computerChoice) {
	function handleComputerChoice(winningChoice) {
		if (computerChoice === humanChoice) {
			results.textContent = `It's a tie! I picked ${computerChoice} too! The current score is ${humanScore}:${computerScore}!`;
		} else if (computerChoice === winningChoice) {
			computerScore += 1;
			results.textContent = `You lose! I picked ${computerChoice}! The current score is ${humanScore}:${computerScore}!`;
		} else {
			humanScore += 1;
			results.textContent = `You win! I picked ${computerChoice}! The current score is ${humanScore}:${computerScore}!`;
		}
	}

	switch (humanChoice) {
		case 'rock':
			handleComputerChoice('paper');
			break;
		case 'paper':
			handleComputerChoice('scissors');
			break;
		case 'scissors':
			handleComputerChoice('rock');
			break;
	}

	if (humanScore >= 5 || computerScore >= 5) {
		results.textContent = `The final score is ${humanScore}:${computerScore}!`;
	}
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));