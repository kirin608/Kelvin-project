let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop()

console.log(secretMessage.length)
secretMessage.push('to');
secretMessage.push('Program');
secretMessage.splice(7,1, 'right');
secretMessage.pop(0);
secretMessage.splice(0,0,'Programming');
console.log(secretMessage)
secretMessage.splice(7,1, 'know')
secretMessage.splice(8,1)
secretMessage.splice(9,1)
secretMessage.splice(10,1)
secretMessage.splice(11,1)
console.log(secretMessage.join());
