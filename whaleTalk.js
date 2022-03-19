var input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
var resultArray =[];

for (let i = 0; i < input.length; i++) {
    var inputLetters = input[i];

    for (let j = 0; j <= vowels.length; j++) {
        const inputVowels = vowels[j];
        if (inputLetters=== inputVowels){
            resultArray.push(inputLetters)
            if (inputLetters === "e" || inputLetters ==="u"){
                resultArray.push(inputLetters)
            }
        }
    }
}
console.log(resultArray)

resultString = resultArray.map(function(e){return e.toUpperCase()});
console.log(resultString.join(''))
