/*
Attach 3 functions (throwRock, throwPaper, throwScissors) to the buttons. **Use console.log to verify the correct functions are being called.

Two Global Variables (players)
playerScore and botScore

getRobotsThrow() 

** Google javascript random number between 0-2 or 1-3. 
Returns:
0 = Rock   //'Rock'
1 = Paper  //'Paper'
2 = Scissors //'Scissors'

getGameOutcome(playThrow, botThrow)
** returns win, lose, draw

updateScore(outcome) - Updates Scoreboard
	update the playerScore and botScore
updateTeaser(outcome, playerThrow, botThrow) - 'You lost haha', 'You won etc'
	displays teaser at the bottom

function throwRock() {
	playGame('rock');
}

function playGame(playerThrow) {
	var botThrow = getRobotsThrow();
	var outcome = getGameOutcome(playerThrow, botThrow);
	updateScore(outcome);
	updateTeaser(outcome, playerThrow, botThrow);
}	
	*/

var playerScore = 0;
var botScore = 0;

document.getElementById('rock').onclick = throwRock;
document.getElementById('paper').onclick = throwPaper;
document.getElementById('scissors').onclick = throwScissors;

function throwRock () {
	console.log("player clicked rock");
	playGame('rock');
}

function throwPaper () {
	console.log("player clicked paper");
	playGame('paper');
}

function throwScissors () {
	console.log("player clicked scissors");
	playGame('scissors');
}

function robotsThrow(){
	var botThrowNumber = Math.floor(Math.random() * 3);

	if (botThrowNumber == 0) {
		return 'rock';
	} else if (botThrowNumber == 1) {
		return 'paper';
	} else if (botThrowNumber == 2) {
		return 'scissors';
	}
}

function playGame(playerThrow) {
	var botThrow = robotsThrow();
	var outcome = gameOutcome(playerThrow, botThrow);
	updateScore();
	updateTeaser(outcome, playerThrow, botThrow);
}	

function gameOutcome(playerThrow, botThrow) {
	if (playerThrow == botThrow) {
		return 'You are tied :|';
	} else if (playerThrow == 'rock') {
		if (botThrow == 'paper') {
			botScore += 1;
			return 'You lose :(';
			
		} else if (botThrow == 'scissors') {
			playerScore += 1;
			return 'You win :)';	
		}

	} else if (playerThrow == 'paper') {
		if (botThrow == 'rock') {
			playerScore += 1;
			return 'You win :)';
		
		} else if (botThrow == 'scissors') {
			botScore += 1;
			return 'You lose :(';
		}
		
	} else if (playerThrow == 'scissors') {
		if (botThrow == 'paper') {
			playerScore += 1;
			return 'You win :)';
			
		} else if (botThrow == 'rock') {
			botScore += 1;
			return 'You lose :(';	
		}
	}  
}

function updateScore() {
	document.getElementById('humanScore').innerHTML = playerScore;
	document.getElementById('computerScore').innerHTML = botScore;
}

function updateTeaser(outcome, playerThrow, botThrow) {
	document.getElementById('status').innerHTML = 'You played ' + playerThrow + '. The bot played ' + botThrow + '.' + '<p>' + outcome + '</p>';
}

