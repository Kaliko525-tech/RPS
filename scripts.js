console.log("hello world!")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    value = Math.floor(Math.random() * 3);

    if (value == 0) {
         computerChoice = "Rock"
        console.log(computerChoice)
    } 
    else if (value == 1) {
        computerChoice = "Paper"
        console.log(computerChoice)
    }
    else if (value == 2) {
        computerChoice = "Scissors"
        console.log(computerChoice)
    }
    else console.log("Error")
}

function getHumanChoice() {
    userChoice = prompt("Rock, Paper, or Scissors" , )
    console.log(userChoice)
}

getComputerChoice()
getHumanChoice()
