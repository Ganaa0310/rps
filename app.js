// define DOM elements
var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var cChoice = document.querySelector('.cChoice');
var pChoice = document.querySelector('.pChoice');
var winner = document.querySelector('.winner');

// scores
var computerScore = 0;
var playerScore = 0;

function play(playerChoice) {
    pChoice.innerText = "Player Choice: " + playerChoice;
    var random = Math.floor(Math.random() * 3);

    var computerChoice;
    if (random == 0) {
        computerChoice = "rock";
        cChoice.innerText = "Computer Choice: Rock";
    } else if (random == 1) {
        computerChoice = "paper";
        cChoice.innerText = "Computer Choice: Paper";
    } else {
        computerChoice = "siccors";
        cChoice.innerText = "Computer Choice: Siccors";
    }

    if (
        (playerChoice == "rock" && computerChoice == "siccors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "siccors" && computerChoice == "paper")
    ) {
        winner.innerText = "Winner: Player";
        playerScore++;
        pPoint.innerText = "Player Point: " + playerScore;
    } else if (playerChoice == computerChoice) {
        winner.innerText = "Winner: Tie";
    } else {
        winner.innerText = "Winner: Computer";
        computerScore++;
        cPoint.innerText = "Computer Point: " + computerScore;
    }
    
}
function reset(){
    cPoint.innerText= "Computer Point: 0";
    pPoint.innerText= "Player Point: 0";
    cChoice.innerText= "Computer Choice:";
    pChoice.innerText= "Player Choice:"
    winner.innerText="Winner:"
}