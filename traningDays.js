const getRandEvent = () => {
const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return   'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};


const getTrainingDays = (event) => {
var days;
  if (event === 'Marathon') {
    return days = 50;
  } else if (event === 'Triathlon') {
    return days = 100;
  } else if (event === 'Pentathlon') {
    return days = 200;
  }
};

 const name = 'Nala';
var logEvent = (event) => {
   
    console.log(`${name}'s event is: ${event}`);
  };
 var logTime = (days) => {

   console.log(`${name}'s time to train is: ${days} days`);
 };

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(event);
logTime(days);


const event2 = getRandEvent();
const days2 = getTrainingDays(event);
const name2 = 'Warren';
 
logEvent( event2);
logTime( days2);
