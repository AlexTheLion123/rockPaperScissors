function computerPlay() {
    let answer; let random;
    random = Math.floor(Math.random()*3);
    if (random < 1) {
        answer = "rock";
    } else if (random>=1 && random <2) {
        answer = "paper";
    } else if (random>=2 && random<3) {
        answer = "scissors";
    }

    return answer;
}

function playRound(playerSelection, computerSelection) {
    let str;

    if(playerSelection=="rock"){
        if(computerSelection=="paper"){
            str = "You lose "+computerSelection+" beats "+playerSelection;
        } else if(computerSelection=="rock"){
            str = "draw";
        } else if(computerSelection=="scissors") {
            str = "You win "+playerSelection+" beats "+computerSelection;
        }
    } else if(playerSelection=="paper"){
        if(computerSelection=="scissors"){
            str = "You lose "+computerSelection+" beats "+playerSelection;
        } else if(computerSelection=="paper"){
            str = "draw";
        } else if(computerSelection=="rock") {
            str = "You win "+playerSelection+" beats " +computerSelection;
        }
    } else if(playerSelection=="scissors"){
        if(computerSelection=="paper"){
            str = " You lose "+computerSelection+" beats "+playerSelection;
        } else if(computerSelection=="scissors"){
            str = "draw";
        } else if(computerSelection=="rock") {
            str = "You win "+playerSelection+" beats "+computerSelection;
        }
    }

    return str;
}

function game(){
    for(i=0;i<5;i++){
        const playerSelection = prompt("Weapon of choice: ");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();