let humanScore=0;
let computerScore=0;
function getComputerChoice()
{
    let num = Math.random();
    if(num<0.33)
        {
        return "rock";
    }
    else if(num>=0.33 && num<0.66)
        {
        return "paper";
    }
    else{
        return "scissor";
    }
}
function getHumanChoice()
{
    let choice = prompt("Enter your choice");
    return choice.toLowerCase();
}

function playGame()
{
    
    
    let humanSelection = getHumanChoice();         
    let computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);

    function playRound(humanChoice,computerChoice)
    {
        if(humanChoice==="paper" && computerChoice==="paper")
        {
            console.log("Draw!");
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${computerScore}`);
        }
        else if(humanChoice==="rock" && computerChoice==="rock")
        {
            console.log("Draw!");
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${computerScore}`);
        }
        else if(humanChoice==="scissor" && computerChoice==="scissor")
        {
            console.log("Draw!");
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${computerScore}`);
        }
        else if(humanChoice==="paper" && computerChoice==="rock")
        {
            humanScore++;
            console.log("You win! Paper beats Rock");
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${computerScore}`);        
        }
        else if(humanChoice==="rock" && computerChoice==="paper")
        {
            computerScore++;
            console.log("You lose! Paper beats Rock");
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${computerScore}`);
    
        } 
        else if(humanChoice==="rock" && computerChoice==="scissor")
        {
            humanScore++;
            console.log("You win! Rock beats Scissor");
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${computerScore}`);
        }
        else if(humanChoice==="scissor" && computerChoice==="rock")
        {
            computerScore++;
            console.log("You lose! Rock beats Scissor");
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${computerScore}`);
        }
        else if(humanChoice==="scissor" && computerChoice==="paper")
        {
            humanScore++;
            console.log("You win! Scissor beats Paper");
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${computerScore}`);
        }
        else
        {
            computerScore++;
            console.log("You lose! Scissor beats Paper");
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${computerScore}`);
        }
    }
}
playGame();
playGame();
playGame();
playGame();
playGame();
console.log("---------Final scores---------")
console.log(`Your score : ${humanScore}`);
console.log(`Computer score : ${computerScore}`);
if(humanScore>computerScore)
{
    console.log("You won the game!");
}
else if(humanScore<computerScore)
{
    console.log("You lose the game!");
}
else 
{
    console.log("Game draw!")
}
