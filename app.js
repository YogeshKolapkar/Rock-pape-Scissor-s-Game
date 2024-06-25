let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
  //rock paper scissor's
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndx = Math.floor(Math.random() * 3);
  return options[randomIndx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = `You Win : Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `You Lose  : ${compChoice} beats  Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const drawgame = () => {
  msg.innerText = "Game Draw .Play Again";
  msg.style.backgroundColor = "#081b31";
};
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  // computer choice
  const compChoice = genCompChoice();
  console.log("Comp choice =", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      //scicssors, paper
      userWin = compChoice == "Paper" ? false : true;
    } else if (userChoice == "Paper") {
      //rock , scicssor
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      //rock , paper
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
