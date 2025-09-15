

function getComputerChoice(){
 let randomNumber=Math.floor(Math.random()*9 + 1);
 if(randomNumber<=3){
  return "rock";
 }
 else if(randomNumber>3 && randomNumber<=6){
  return "paper";
 }
 else{
  return "scissors";
 }
  
}
 function getHumanChoice(){
   let userInput=prompt("Rock(R),  Paper(P),  Scissors(S)");
   if(userInput==null || userInput=="")
    alert("Enter a valid input Rock(R),  Paper(P),  Scissors(S)");
    else{
    userInput=userInput.toLowerCase();
       if(userInput=='rock'|| userInput=='r')
       return "rock";
       else if(userInput=='paper'||userInput=='p')
       return "paper";
       else if(userInput=='scissors' || userInput=='s')
       return "scissors";
        else 
        alert("Enter a valid input Rock(R),  Paper(P),  Scissors(S)");
    }
 }

 let humanScore=0;
 let computerScore=0;


 function playGame(){
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
      if (humanChoice == computerChoice) console.log("It is a draw!");
      else {
        if (humanChoice == "rock") {
          if (computerChoice == "paper") {
            console.log("You lose! paper beats rock");
            computerScore++;
          } else if (computerChoice == "scissors") {
            console.log("You win! rock beats scissors");
            humanScore++;
          }
        } else if (humanChoice == "paper") {
          if (computerChoice == "rock") {
            console.log("You win ! paper beats rock");
            humanScore++;
          } else if (computerChoice == "scissors") {
            console.log("You lose! scissors beat paper");
            computerScore++;
          }
        } else if (humanChoice == "scissors") {
          if (computerChoice == "rock") {
            console.log("You lose! rock beats scissors");
            computerScore++;
          } else if (computerChoice == "paper") {
            console.log("You win! scissors beats paper");
            humanScore++;
          }
        }
      }
    }
    playRound(humanSelection,computerSelection);
 }
  
function startGame(){
 for(let i=0;i<5;++i){
    playGame();
 }
}

//display result
function displayResult(){
  let result = {
    "Computer Score": computerScore,
    "Human Score": humanScore,
  };
  console.table(result);
  if (humanScore > computerScore) {
    alert("You Won");
  }
 else if(humanScore<computerScore){
  alert("You lose! Try again by clicking the button");
 }
 else{
  alert("It was a draw!");
 }
}

 //startGame(); 
const startButton=document.getElementById('start-btn');
startButton.addEventListener("click",()=>{
  startGame();
  displayResult();
});
