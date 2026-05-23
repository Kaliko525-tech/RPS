console.log("hello from Wolverton Solutions Software!")

let humanScore = 0
let computerScore = 0

const choiceRock = document.querySelector("#rock")
const choicePaper = document.querySelector("#paper")
const choiceScissors = document.querySelector("#scissors")

choiceRock.addEventListener("click", () => playGame("rock"))
choicePaper.addEventListener("click", () => playGame("paper"))
choiceScissors.addEventListener("click", () => playGame("scissors"))

const gameButtons = [choicePaper, choiceRock, choiceScissors]


const scoreBox = document.querySelector(".scoreBox")

const playerScoreBoard = document.createElement("p")
const computerScoreBoard = document.createElement("p")
const resultBoard = document.createElement("p")

function getComputerChoice() {
    value = Math.floor(Math.random() * 3);

    if (value == 0) {
        computerChoice = "Rock"
      return computerChoice
    } 
    else if (value == 1) {
        computerChoice = "Paper"
      return computerChoice
        
    }
    else if (value == 2) {
        computerChoice = "Scissors"
      return computerChoice
        
    }
    else console.log("Error")
}

function getHumanChoice(btnChoice) {
    userChoice = btnChoice
    console.log(userChoice)
   return userChoice
}


function playRound(humanChoice , computerChoice) {
    if (humanChoice == "paper" && computerChoice == "Rock") {
        resultBoard.textContent = "Paper beats Rock! Human Wins!"
        humanScore = ++humanScore 
        playerScoreBoard.textContent = "Player: "+ humanScore
        computerScoreBoard.textContent = "computer " + computerScore
    }
    else if (humanChoice == "rock" && computerChoice == "Scissors") {
        resultBoard.textContent = "Rock beats Scissors! Human Wins!"
        humanScore = ++humanScore 
        playerScoreBoard.textContent = "Player: "+ humanScore
        computerScoreBoard.textContent = "computer " + computerScore
    }
    else if (humanChoice == "scissors" && computerChoice == "Paper") {
        resultBoard.textContent = "Scissors beats Paper! Human Wins!"
        humanScore = ++humanScore 
        playerScoreBoard.textContent = "Player: "+ humanScore
        computerScoreBoard.textContent = "computer " + computerScore
    }
    else if (humanChoice == "rock" && computerChoice == "Paper") {
        resultBoard.textContent = "Rock loses to Paper! Computer Wins!"
        computerScore = ++computerScore 
        playerScoreBoard.textContent = "Player: "+ humanScore
        computerScoreBoard.textContent = "computer " + computerScore
    }
    else if (humanChoice == "scissors" && computerChoice == "Rock") {
        resultBoard.textContent = "Scissors loses to Rock! Computer Wins!"
        computerScore = ++computerScore 
        playerScoreBoard.textContent = "Player: "+ humanScore
        computerScoreBoard.textContent = "computer " + computerScore
    }
    else if (humanChoice == "paper" && computerChoice == "Scissors") {
        resultBoard.textContent = "Paper loses to Scissors! Computer Wins!"
        computerScore = ++computerScore ;
        playerScoreBoard.textContent = "Player: "+ humanScore
        computerScoreBoard.textContent = "computer " + computerScore
    }
    else if (humanChoice == "paper" && computerChoice == "Paper" || humanChoice == "rock" && computerChoice == "Rock" || humanChoice == "scissors" && computerChoice == "Scissors") {
        resultBoard.textContent = "ITS A DRAW!"
        playerScoreBoard.textContent = "Player: "+ humanScore
        computerScoreBoard.textContent = "computer " + computerScore
    }
} 





function playGame(btnChoice){
    const humanSelection = getHumanChoice(btnChoice)
    const computerSelection = getComputerChoice()

    scoreBox.appendChild(playerScoreBoard)
    scoreBox.appendChild(computerScoreBoard)
    scoreBox.appendChild(resultBoard)
    
    playRound(humanSelection , computerSelection)

    if (computerScore == 5) {
    resultBoard.textContent = "COMPUTER WINS!"
    scoreBox.appendChild(resultBoard)
    gameButtons.forEach(btn => btn.disabled = true)
} 
else if (humanScore == 5 ) {
    resultBoard.textContent = "YOU WIN!"
    scoreBox.appendChild(resultBoard)
    gameButtons.forEach(btn => btn.disabled = true)
} 


    


}

const resetBtn = document.querySelector("#reset")

resetBtn.addEventListener("click", () => {
    scoreBox.removeChild(playerScoreBoard)
    scoreBox.removeChild(computerScoreBoard)
    scoreBox.removeChild(resultBoard)
    computerScore = 0
    humanScore = 0
    gameButtons.forEach(btn => btn.disabled = false)
})
