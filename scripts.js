function computerPlay() {
    let answer; let random;
    random = Math.random();
    console.log(random);
    answer = Math.floor(random);
    return answer;
}

temp = computerPlay();
alert(temp);