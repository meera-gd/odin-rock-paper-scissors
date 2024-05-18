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

function getHumanChoice() {
	return prompt('Rock, paper, or scissors?');
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		humanChoice = humanChoice.toLowerCase();

		function handleComputerChoice(winningChoice) {
			if (computerChoice === humanChoice) {
				console.log(`It's a tie! I picked ${computerChoice} too!`);
			} else if (computerChoice === winningChoice) {
				console.log(`You lose! I picked ${computerChoice}!`);
				computerScore += 1;
			} else {
				console.log(`You win! I picked ${computerChoice}!`)
				humanScore += 1;
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
			default:
				console.log('Not a valid choice.');
		}
	}

	playRound(getHumanChoice(), getComputerChoice());
	playRound(getHumanChoice(), getComputerChoice());
	playRound(getHumanChoice(), getComputerChoice());
	playRound(getHumanChoice(), getComputerChoice());
	playRound(getHumanChoice(), getComputerChoice());

	console.log(`The score is ${humanScore}:${computerScore} after 5 rounds.`);
}

playGame();