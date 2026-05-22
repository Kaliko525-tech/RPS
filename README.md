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