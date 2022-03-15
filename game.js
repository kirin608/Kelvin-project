alert ("welcome to : Rock Paper Scissors")
var userInput = prompt("choose your # option to play: Rock-1, Paper-2,Scissors-3  ");
userInput=parseInt(userInput);
if (userInput === 1){ userInput = ('Rock')}
else if (userInput === 2) {userInput = ('Paper')}
else if (userInput === 3) {userInput = ('Scissors')}
else (alert (`${userInput} is wrong input`));

var computerChoice = Math.floor(Math.random() * 3);
if (computerChoice === 1){ computerChoice = ('Rock')}
else if (computerChoice === 2) {computerChoice = ('Paper')}
else if (computerChoice === 3) {computerChoice = ('Scissors')}

console.log(userInput,computerChoice);

var determineWinner = function () {
    if (computerChoice ===  userInput ){
        return choise = ('tie');
    }  else if(computerChoice ==='Rock' && userInput === 'Paper') {
        return choise =(" you win!");
    } else if(computerChoice ==='Rock' && userInput === 'Scissors') {
        return choise =(" you loose!");
    } else if(computerChoice === 'Paper' && userInput === 'Rock') {
        return choise =(" you loose!");
    } else if(computerChoice === 'Paper' && userInput === 'Scissors') {
        return choise =(" you win!");
    }  else if(computerChoice === 'Scissors' && userInput ==='Rock') {
        return choise =(" you win!");
    } else if(computerChoice === 'Scissors' && userInput === 'Paper') {
        return choise =(" you loose!");
    }
}

determineWinner ();


 alert(`you ${userInput}/ comp" "${computerChoice} = ${choise}`);
