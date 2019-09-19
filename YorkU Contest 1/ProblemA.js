const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0;
var count2 = 0;

rl.on('line', (line) => {
  if (count === 0) {
    var num = parseInt(line);
  } else {
    var temps = line.split(' ');
    
    temps.forEach((temp) => {
      if (parseInt(temp) < 0) {
        count2++
      }
    })
    
    console.log(count2)
  }
  
  count++

});