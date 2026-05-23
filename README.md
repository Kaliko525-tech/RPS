# RPS
Rock Paper Scissors console game


PSEUDOCODE! 

I am making a RPS game where the user will play against the "computer". 

I will be starting with making a function called computersChoice

the computer will randomly choose between "rock" "paper" "scissors" to do this I will need to have a random number generated and depeding on that number the function will choose one of the three choices. 

looking at the documentation for math.random() i only want it to go up to 3 numbers, so i can just use the basic 1 parameter. I will also use a default to of 3 for this when setting the max parameter. 

okay thats done and was pretty easy

now we are onto the harder part lets see how we go. 

okay so a round of RPS can go the following way

rock beats scissors
paper beats rock
scissors beats paper

human == Paper && compuer == rock - human win // humanscore++

human == rock && computer == scissors - human win // humanscore++

human == scissors && computer == paper - human win  // humanscore++

human == rock && computer == paper - computer win  // computerScore++

human == scissors && computer == rock - computer win // computerScore++

human == paper && computer == scissors - computer win // computerScore++

human == paper && computer == paper || human == scissors && computer == scissors || human == rock && computer == rock - Its a draw score != ++


PSEUDOCODE2 - ELECTRIC BOOGALOO!

GOOD MORNING WOLRD!

right some changes that need to be made. we are making a UI for this.

1. make human choice come from buttons. 
2. add a score board. 
3. score board displays score after each round. 
4. at round 5 compares scores and declares winner or a tie. 


1. human choice come from a button. 

*dont forget to add a defer to HTML script tag as we are now using DOM manipulations. *

human input = buttons

3 buttons - rock, paper, scissors. -> these decide the choice the human makes. 

computer input is still the same.

create query selectors for each button,  add an onclick function that when the respective button is clicked it "starts the round" and takes the value of the choice from the button and stores it into the humanSelection constant in playGame(). 

const choiceRock = document.querySelector("#rock") <--- for each button, "." is for class names, "#" is for IDs. 

add an event listener to the buttons that when clicked will create and store the value for their respective button. 

choiceRock.addEventListener("click" , () => getHumanChoice(Rock))

refactor getHumanChoice to take in arguement from button selection // done already. got a bit ahead of myself. 

getHumanChoice(btnChoice) {
    userChoice = btnChoice
    return userChoice
}

time to test! put a console.log() above "return" i.e console.log(userchoice)

right this looks good! but i think we have forgotten that we need to also play the round, so some more re-factoring is required. 

i think the buttons need to actually do a play game functions. and we need to re-factor playGame to 

WOW yes that did work, we just changed the click event listeners on the buttons to be the playGame funciton and added the arguement btnChoice to it and that it passes that through to the getHumanChoice argument and it works exactly as expectred! i did notice a small bug though, it seemed to not play the very first game. but after it works okay. Oh no nevermind, might have just been first time jitters its working as intended now. 

no refactoring playGame for now. 

2. added a div to HMTL

3. output the score board and commentator

so for the assignment, i believe i need to manipulate the DOM from JS, as a good practice for this, there are obviously better ways to do this. but for the assingment. 

ive added a div to the html and classed it scorebox. 

i need to grab this by and store it in a const. 

const scoreBox = document.querySelector(".scoreBox") // now that i have this, i can manipulate it. 

i then need to CREATE ELEMENTS. 

const playerScoreBoard = document.createElement("p")
const computerScoreBoard = document.createElement("p").
const resultBoard = document.createElement("p")

then i need to refactor play round to push these to the HTML and update them after each round. 

so this! ->


    if (humanChoice == "paper" && computerChoice == "Rock") {
        console.log("Paper beats Rock! Human Wins!")
        humanScore = ++humanScore 
        console.log(humanScore , computerScore , humanChoice, computerChoice)

needs to become this ->


    if (humanChoice == "paper" && computerChoice == "Rock") {
        reultBoard.textContent = "Paper beats Rock! Human Wins!" ***
        humanScore = ++humanScore 
        playerScoreBoard.textContent = humanScore ***
        computerScoreBoard.textContent = computerScore ***
    }


    but now i wonder where i append the child. 

    I will need to do the following

    scoreBox.appendChild(playerScoreBoard)
    scoreBox.appendChild(computerScoreBoard)
    scoreBox.appendChild(resultBoard)

    but im not sure where i place this, i need it to update each round, but i do not want it to add the elements each round. 

    im going to try put them into the playgame function. -> This WORKS! all of it! well done mate! 

    i will now refactor the rest of the code. thats done and NO BUGS! WOOHOO!!


4. game ends with first player to 5 points. #

definitley need to refact the playGame function for this. 

introduce and if else statement. 

if (computerScore == 5) {
    resultBoard.textContent = "COMPUTER WINS!
    scoreBox.appendChild(resultBoard)
} 
else if (Player Score == 5 ) {
    resultBoard.textContent = "YOU WIN!"
} 
else {

    const humanSelection = getHumanChoice(btnChoice)
    const computerSelection = getComputerChoice()

    scoreBox.appendChild(playerScoreBoard)
    scoreBox.appendChild(computerScoreBoard)
    scoreBox.appendChild(resultBoard)
    
    playRound(humanSelection , computerSelection)

}

lets test this out. -> THIS WORKS! WOOHOO! PSEUDOCODE FOR THE WIN!

although i did notice, for the winning output it only shows once i click a choice again, this could be more dynamic, that WHEN humanScore == 5 || computerScore == 5 it pushes the winner result and prevents further playing. 

5. (BONUS?) add a reset button. 

yes just for fun, 

i think i just need it to remove appended children and reset score. 

so grab the button, add and event listener, create function that removes apended children and resets score. 

this works! attempted to use remove() method, but did not work. removechild() did work. 
