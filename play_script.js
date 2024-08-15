function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Enter rock, paper or scissors: ");
    choice = choice.toUpperCase();
    while(choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS"){
        prompt("Invalid choice: Please enter either rock, paper or scissors.");
        choice = prompt("Enter rock, paper or scissors: ");
        choice = choice.toUpperCase();
    }
    switch (choice){
        case "ROCK":
            return 0;
        case "PAPER":
            return 1;
        case "SCISSORS":
            return 2;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == 2 && computerChoice == 0){
        computerScore++;
        console.log("You lose! Rock beats Scissors! ");
    }
    else if (humanChoice == 0 && computerChoice == 2){
        humanScore++;
        console.log("You win! Rock beats Scissors!");
    }
    else if (humanChoice == 0 && computerChoice ==1){
        computerScore++;
        console.log("You lose! Paper beats Rock!");
    }
    else if (humanChoice == 1 && computerChoice ==0){
        humanScore++;
        console.log("You win! Paper beats Rock!");
    }
    else if (humanChoice ==1 && computerChoice == 2){
        computerScore++;
        console.log("You lose! Scissors beats Paper!");
    }
    else if(humanChoice ==2 && computerChoice == 1){
        humanScore++;
        console.log("You win! Scissors beats Paper!");
    }
    else{
        humanScore+=0.5;
        computerScore+=0.5;
    }
}

function playGame(rounds){
    for(let count=0;count<rounds;count++){
        let comp = getComputerChoice();
        let human = getHumanChoice();
        playRound(comp, human);
    }
    console.log("End of the game!");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    if(computerScore>humanScore)
        console.log("The winner is: " + "Computer");
    else if(computerScore<humanScore)
        console.log("The winner is: " + "Human");
    else
        console.log("The game is a tie!");
    
}

//execution starts here
let humanScore = 0, computerScore = 0;
playGame(5);
