let userScore = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userPara = document.querySelector("#user");
let compPara = document.querySelector("#comp");

const drawGame = () => {
    console.log("Game drawn");
    msg.innerHTML = "Game drawn";
    msg.style.color = "Grey";
}
const showWinner = (userWin,choiceid,compChoice) => {
    if(userWin)
    {
        userScore++;
        userPara.innerHTML = userScore;
        console.log("You won!");
        msg.innerHTML = `You Won!, ${choiceid} beats ${compChoice}`;
        msg.style.color = "Green";
    }
    else{
        computer++;
        compPara.innerHTML = computer;
        console.log("Computer won!");
        msg.innerHTML = `Computer Won!, ${compChoice} beats ${choiceid}`;
        msg.style.color = "Red";
    }

}
const CompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];
};

const PlayGame = (choiceid) => {
    console.log("Choice is clicked", choiceid);
    const compChoice = CompChoice();
    console.log(compChoice);

    if(choiceid === compChoice)
    {
        drawGame();
    }else{
        let userWin = true;
        if(choiceid === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(choiceid === "paper")
        {
            userWin = compChoice === "scissor" ? false : true; 
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,choiceid,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
       PlayGame(choiceid);

    });

});