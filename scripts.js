console.log("hello world!")

let humanScore = 0
    let computerScore = 0

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

function getHumanChoice() {
    userChoice = prompt("Rock, Paper, or Scissors" , )
   return userChoice = userChoice.toLowerCase()
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





function playGame(){
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection , computerSelection)
}

playGame()
playGame()
playGame()
playGame()
playGame()
