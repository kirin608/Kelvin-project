var userName = prompt("Enter your name: ");

if (userName == 'Jane') {
    console.log (`Hello,Jane!`);
} else {
    console.log(`Hello, ${userName}!`);
}

var userQuestion = prompt(`Ask your question ${userName}`);

console.log('stating what was asked');
alert ('stating what was asked')
var randomNumber = Math.floor(Math.random() * 8);
if (randomNumber === 0 ){
var eightBall = ('It is certain');
} else if (randomNumber === 1 ){
    var eightBall = ('It is decidedly so');
} else if (randomNumber === 2 ){
    var eightBall = ('Reply hazy try again');
} else if (randomNumber === 3 ){
    var eightBall = ('Cannot predict now');
} else if (randomNumber === 4 ){
    var eightBall = ('Do not count on it');
} else if (randomNumber === 5 ){
    var eightBall = ('My sources say no');
} else if (randomNumber === 6 ){
    var eightBall = ('Outlook not so good');
} else if (randomNumber === 7 ){
    var eightBall = ('Signs point to yes');
} 
console.log(eightBall);
alert(`Dear ${userName}!  ${eightBall}`);

