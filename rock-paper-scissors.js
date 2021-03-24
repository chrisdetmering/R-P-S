let cptrPlay = "";

document.getElementById("rockBtn").addEventListener("click", ()=>{
   console.log("rock button clicked");
   const userPlay = "rock";
   fcnCptrPlay(cptrPlay);
   determineWinner(userPlay, cptrPlay);
});
   
document.getElementById("paperBtn").addEventListener("click", ()=>{
    console.log("paper button clicked");
    const userPlay = "paper";
    fcnCptrPlay(cptrPlay);
    determineWinner(userPlay, cptrPlay);
});

document.getElementById("scissorsBtn").addEventListener("click", ()=>{
    console.log("scissors button clicked");
    const userPlay = "scissors";
    fcnCptrPlay(cptrPlay);
    determineWinner(userPlay, cptrPlay);
});

function fcnCptrPlay () {
      switch (randomNum = Math.floor(Math.random()*3)) {
        case 0: 
        cptrPlay = "rock";
        break;
        case 1: 
        cptrPlay = "paper";
        break;
        case 2: 
        cptrPlay = "scissors"; 
    }
    alert("Computer plays " + cptrPlay);
}

function determineWinner (userPlay, cptrPlay) {
    let results = document.getElementById("results");
    //user win scenarios
    if ((userPlay === "rock" && cptrPlay === "scissors") || 
        (userPlay === "paper" && cptrPlay === "rock" ) ||
        (userPlay === "scissors" && cptrPlay === "paper")) {
        results.textContent = "You won";
    } else //computer win scenarios
    if ((cptrPlay === "rock"  && userPlay === "scissors") || 
        (cptrPlay === "paper" && userPlay === "rock" ) ||
        (cptrPlay === "scissors" && userPlay === "paper")) {
        results.textContent = "Computer won";
        }
    else {
   // if (userPlay === cptrPlay) 
        results.textContent = "Tie";
    };
}


