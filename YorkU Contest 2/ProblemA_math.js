const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0;

rl.on('line', (line) => {
  var data = line.split(' ');
  n = parseInt(data[0]);
  
  console.log(Math.log(Math.log(2) * n) / Math.log(2))
    
});
