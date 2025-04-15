let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw. Play again";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin) {
        console.log("you win!");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        console.log("you lose");
        msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice =" , userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log ("comp choice =", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userwin = true;
        if (userChoice === "rock"){
            userwin =  compChoice === "paper" ? false : true;   
        } else if(userChoice === "paper")   {
            userwin =  compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
        choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
        });
}); 