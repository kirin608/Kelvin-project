
var time = prompt("Enter your time: ");

let raceNumber = Math.floor(Math.random() * 1000);
if (time > 9.5 && time < 11 ){
    var timeRace = ('Early adults run at 9:30 am')
} else if (time >= 11 && time < 12.5 ){
    var timeRace =('Late adults run at 11:00 am')
} else if (time === 12.5){
      var timeRace = ('Youth registrants run at 12:30 pm (regardless of registration)')
} else { 
    var timeRace = ('no runs at this time')}
alert ( timeRace)

var runAge =prompt("Enter your age: ");
if (runAge < 18) {
    var ageGrup= ("you are youth category")
} else {var ageGrup= ("You are adult" )}
alert (ageGrup)

if (  time > 9.5 && time < 12.5 && runAge < 18) {
    var answer = ("no runs for you at this time.Youth registrants run at 12:30 pm ")
} else if (time > 9.5 && time < 12.5 && runAge > 18) {
    var answer = ( `be ready for run man. your number is ${raceNumber}`)
} else if (time ===12.5 && unAge > 18) {
    var answer =(`be ready to run kid. your number is ${raceNumber}`)
} else {
    var answer =('no runs for you today')
}
alert (answer)
