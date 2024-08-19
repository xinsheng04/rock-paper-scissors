function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:
            computerChoice = "rock";
            computerIcon.src = "./icons/rock.png";
            break;
        case 1:
            computerChoice = "paper";
            computerIcon.src = "./icons/paper.png";
            break;
        case 2:
            computerChoice = "scissors";
            computerIcon.src = "./icons/scissors.png";
            break;
    }
}

function playRound(){
    let temp;
    if (humanChoice == "scissors" && computerChoice == "rock"){
        temp = ++computerScore.textContent;
        computerScore.textContent = temp;
        result.textContent = "You lose! Rock beats Scissors! "
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        temp = ++humanScore.textContent;
        humanScore.textContent = temp;
        result.textContent = "You win! Rock beats Scissors!";
    }
    else if (humanChoice == "rock" && computerChoice =="paper"){
        temp = ++computerScore.textContent;
        computerScore.textContent = temp;
        result.textContent = "You lose! Paper beats Rock!";
    }
    else if (humanChoice == "paper" && computerChoice =="rock"){
        temp = ++humanScore.textContent;
        humanScore.textContent = temp;
        result.textContent = "You win! Paper beats Rock!";
    }
    else if (humanChoice =="paper" && computerChoice == "scissors"){
        temp = ++computerScore.textContent;
        computerScore.textContent = temp;
        result.textContent = "You lose! Scissors beats Paper!";
    }
    else if(humanChoice =="scissors" && computerChoice == "paper"){
        temp = ++humanScore.textContent;
        humanScore.textContent = temp;
        result.textContent = "You win! Scissors beats Paper!";
    }
    else{
        result.textContent = "Draw!";
    }
}

function handleChoiceSelection(button) {
    if (previousButton) {
      previousButton.style.backgroundColor='gray';
    }
    button.style.backgroundColor='green';
    humanChoice = button.id;
    if(button.id == "rock")
        humanIcon.src = './icons/rock.png';
    else if(button.id == "paper")
        humanIcon.src = './icons/paper.png';
    else if(button.id == "scissors")
        humanIcon.src = './icons/scissors.png';
    previousButton = button;
}

function detectWinCondition(){
    if(humanScore.textContent < winScore && computerScore.textContent < winScore)
        return;
    else if(humanScore.textContent >= 5){
        result.textContent = "Player Victory!";
        result.style.backgroundColor = "green";
    }
    else if(computerScore.textContent >= 5){
        result.textContent = "Computer Victory!";
        result.style.backgroundColor = "red";
    }
    stopGame = true;
}

//execution starts here
//initialize variables
const humanScore = document.getElementById("playerscore");
const computerScore = document.getElementById("computerscore");
const humanIcon = document.getElementById("human-choice");
const computerIcon = document.getElementById("computer-choice");
const result = document.getElementById("result");
let humanChoice = null, computerChoice = null;

let stopGame = false;//flag to stop the game when victory is obtained
let winScore = 5; //win condition
//initialize scores
humanScore.textContent = 0;
computerScore.textContent = 0;

//add logic to choice selectors
const buttons = document.querySelectorAll(".panel button");
let previousButton = null;
for(let i = 0; i<buttons.length-1; i++){
    buttons[i].addEventListener("click", () => handleChoiceSelection(buttons[i]));
}
//add logic to confirmation button
buttons[buttons.length-1].addEventListener("click", () =>{
    if(stopGame) return;
    else if(humanChoice==null)
        return;
    else{
        getComputerChoice();
        playRound();
        detectWinCondition();
    }
});
