function computerPlay() {
    let answer; let random;
    random = Math.floor(Math.random())*3;
    
    if (random < 1) {
        answer = "rock";
    } else if (random>=1 && random <2) {
        answer = "paper";
    } else if (random>=2 && random<3) {
        answer = "scissors";
    }
    return answer;
}

temp = computerPlay();
console.log(temp);