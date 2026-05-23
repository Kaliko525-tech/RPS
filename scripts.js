console.log("hello from Wolverton Solutions Software!")

let humanScore = 0
let computerScore = 0

const choiceRock = document.querySelector("#rock")
choiceRock.addEventListener("click", () => playGame("rock"))

const choicePaper = document.querySelector("#paper")
choicePaper.addEventListener("click", () => playGame("paper"))

const choiceScissors = document.querySelector("#scissors")
choiceScissors.addEventListener("click", () => playGame("scissors"))



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
        console.log("Paper beats Rock! Human Wins!")
        humanScore = ++humanScore 
        console.log(humanScore , computerScore , humanChoice, computerChoice)
    }
    else if (humanChoice == "rock" && computerChoice == "Scissors") {
        console.log("Rock beats Scissors! Human Wins!")
        humanScore = ++humanScore 
        console.log(humanScore , computerScore , humanChoice, computerChoice)
    }
    else if (humanChoice == "scissors" && computerChoice == "Paper") {
        console.log("Scissors beats Paper! Human Wins!")
        humanScore = ++humanScore 
        console.log(humanScore , computerScore , humanChoice, computerChoice)
    }
    else if (humanChoice == "rock" && computerChoice == "Paper") {
        console.log("Rock loses to Paper! Computer Wins!")
        computerScore = ++computerScore 
        console.log(humanScore , computerScore , humanChoice, computerChoice)
    }
    else if (humanChoice == "scissors" && computerChoice == "Rock") {
        console.log("Scissors loses to Rock! Computer Wins!")
        computerScore = ++computerScore 
        console.log(humanScore , computerScore , humanChoice, computerChoice)
    }
    else if (humanChoice == "paper" && computerChoice == "Scissors") {
        console.log("Paper loses to Scissors! Computer Wins!")
        computerScore = ++computerScore ;
        console.log(humanScore , computerScore , humanChoice, computerChoice)
    }
    else if (humanChoice == "paper" && computerChoice == "Paper" || humanChoice == "rock" && computerChoice == "Rock" || humanChoice == "scissors" && computerChoice == "Scissors") {
        console.log("ITS A DRAW!")
        console.log(humanScore , computerScore , humanChoice, computerChoice)
    }
} 





function playGame(btnChoice){
    const humanSelection = getHumanChoice(btnChoice)
    const computerSelection = getComputerChoice()
console.log(computerScore) // this works and the score is counting,
    playRound(humanSelection , computerSelection)
}
