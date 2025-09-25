    
    //get User's Name
   const userName= function getUserName (){
    
      let userName=prompt('What is your name ?');
        if(!userName || userName==null)
          getUserName();
        else{
      const user=document.querySelector('#userName');
  user.textContent=userName;
        }
    }();
 
   
  
 //variables
    let humanScore=document.querySelector('#user-num');
    let computerScore=document.querySelector('#comp-num');
    const choices=document.querySelector('.game-btns');
   const announce = document.querySelector(".score-title");


    //get random computer choice
   
  function getComputerChoice(){
      const computerBox=document.querySelector('.comp-choice');
   //get random number from 1 to 9
     let randomNumber=Math.floor(Math.random()*3 + 1)
     if(randomNumber==1){
        computerBox.textContent='rock';
        computerBox.style.backgroundColor=`var(--rock-color)`;
      return 'rock';
     }
     else if(randomNumber==2){
       computerBox.textContent = "paper";
       computerBox.style.backgroundColor = `var(--paper-color)`;
      return 'paper';
     }
     else  {
       computerBox.textContent = "scissor";
       computerBox.style.backgroundColor = `var(--scissor-color)`;
      return 'scissor';
     }
    }


    //final result function
    function getFinalResult(){
      if (Number(humanScore.textContent) >= 5) {
        alert("congratulations! You Won.");
      } else {
        alert("Game Over! You lost");
      }
      //resetting everything for new game
      humanScore.textContent = 0;
      computerScore.textContent = 0;
      const choices = document.querySelectorAll(".choice");
      //reset game boxes
      for (let choice of choices) {
        choice.style.backgroundColor = "transparent";
        choice.textContent = "";
      }
      //reset announcement
      announce.textContent = "";
      announce.style.display = "none";
    }


    //playing round function
         
    function playRound(choice){
           const userName=document.querySelector('#userName')
           //human-background-color
           
        const humanBox = document.querySelector(".human-choice");
        humanBox.textContent =  choice;
        humanBox.style.backgroundColor = `var(--${choice}-color)`;
       
            let humanChoice=choice;
            let computerChoice=getComputerChoice();
          //if human choice and computer choice are same
          if(humanChoice===computerChoice){
            announce.textContent='Draw!';
            announce.style.display='block';
          }
          //if not comparing logic
          else{
          
            //if human choice is rock
            if(humanChoice=='rock') {
              if (computerChoice == "paper") {
                announce.textContent='computer won!';
                 announce.style.display = "block";
                computerScore.textContent = 1 + Number(computerScore.textContent);
              }
               else if (computerChoice == "scissor") {
                announce.textContent = `${userName.textContent} Won!`;
                 announce.style.display = "block";
                humanScore.textContent = 1 + Number(humanScore.textContent);
              }
              
            }
            else if(humanChoice=='paper') {
              if (computerChoice == "rock") {
                announce.textContent = `${userName.textContent} Won!`;
                 announce.style.display = "block";
                humanScore.textContent = 1 + Number(humanScore.textContent);
              } else if (computerChoice == "scissor") {
                announce.textContent = "Computer Won !";
                 announce.style.display = "block";
                computerScore.textContent = 1 + Number(computerScore.textContent);
              }
              
            }
            else if(humanChoice=='scissor') {
              if (computerChoice == "paper") {
                announce.textContent = `${userName.textContent} Won!`;
                 announce.style.display = "block";
                humanScore.textContent = 1 + Number(humanScore.textContent);
              } else if (computerChoice == "rock") {
                announce.textContent = "Computer Won !";
                 announce.style.display = "block";
                computerScore.textContent = 1 + Number(computerScore.textContent);
              }
               
            }
          }

          if(Number(humanScore.textContent)==5 || Number(computerScore.textContent)==5){
            
            getFinalResult();
          }
        }

         //Game starts Here

     choices.addEventListener('click',(e)=>{
       e.preventDefault();
       
       let humanChoice=e.target.id;
       // play round function
       if (
         humanChoice == "rock" ||
         humanChoice == "paper" ||
         humanChoice == "scissor"
       )
        { 
          playRound(humanChoice);
        }

        //human background
        /*
        const humanBox=document.querySelector('.human-choice');
        humanBox.textContent=e.target.id;
        humanBox.style.backgroundColor=`var(--${e.target.id}-color)`;
        */
     })



   //reset method
   const resetButton=document.querySelector('#reset');

   resetButton.addEventListener('click',(e)=>{
       humanScore.textContent=0;
       computerScore.textContent=0;
    //reset game boxes
    const choices=document.querySelectorAll('.choice');

    for(let choice of choices){
      choice.style.backgroundColor='transparent'
      choice.textContent='';
    }
  //reset announcement
  announce.textContent='';
  announce.style.display='none';
   })

     