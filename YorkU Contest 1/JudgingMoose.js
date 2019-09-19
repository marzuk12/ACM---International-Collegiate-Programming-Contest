const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var a = parseInt(nums[0]);
    var b = parseInt(nums[1]);
    
    if (a === 0 && b === 0) {
      console.log("Not a moose");
    } else if ( a === b ) {
      console.log("Even " + 2 * b);
    } else {
      if ( a > b){
        b = a;
      }
      console.log("Odd " + 2 * b);
    }
});