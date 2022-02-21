
const kelvin = 293;
// The value saved to kelvin will stay constant

var celsius = kelvin - 273;
//convert Kelvin to Celsius by subtracting 273 from the kelvin variable

var fahrenheit = celsius * (9/5) + 32;
// calculate Fahrenheit

fahrenheit = Math.floor(fahrenheit);
//round the number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${kelvin} degrees Fahrenheit.`);

console.log(`0 Kelvin eaquals to ${Math.floor((0 - 273)* (9/5) + 32)} Fahrengheit`);

var newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees newton.`);

