let userScore = 0;
let computerScore = 0;
let ties = 0;

function startGame() {
    document.getElementById("welcome-message").style.display = "none";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("back-button").style.display = "block";
    userScore = 0;
    computerScore = 0;
    ties = 0;
    updateScoreboard();
}

function goBack() {
    document.getElementById("welcome-message").style.display = "block";
    document.getElementById("start-button").style.display = "block";
    document.getElementById("game-container").style.display = "none";
    document.getElementById("back-button").style.display = "none";
}

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    document.getElementById("user-choice").innerText = userChoice;
    document.getElementById("computer-choice").innerText = computerChoice;
    document.getElementById("user-hand").innerText = getHandSign(userChoice);
    document.getElementById("computer-hand").innerText = getHandSign(computerChoice);

    let resultText = "";
    
    if (userChoice === computerChoice) {
        resultText = "It's a Tie!";
        ties++;
        document.getElementById("lose-sound").pause(); // Ensure losing sound is paused
        document.getElementById("lose-sound").currentTime = 0; // Reset to start
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText = "You Win!";
        userScore++;
        const winSound = document.getElementById("win-sound");
        winSound.pause(); // Pause the sound if it is playing
        winSound.currentTime = 0; // Reset to start
        winSound.play(); // Play winning sound
    } else {
        resultText = "You Lose!";
        computerScore++;
        const loseSound = document.getElementById("lose-sound");
        loseSound.pause(); // Pause the sound if it is playing
        loseSound.currentTime = 0; // Reset to start
        loseSound.play(); // Play losing sound
    }
    
    document.getElementById("result-text").innerText = resultText;
    updateScoreboard();
}

function getHandSign(choice) {
    switch (choice) {
        case 'rock':
            return '✊';
        case 'paper':
            return '✋';
        case 'scissors':
            return '✌️';
    }
}

function updateScoreboard() {
    document.getElementById("wins").innerText = "Wins: " + userScore;
    document.getElementById("losses").innerText = "Losses: " + computerScore;
    document.getElementById("ties").innerText = "Ties: " + ties;
}
