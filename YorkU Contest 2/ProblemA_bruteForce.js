const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;

rl.on('line', (line) => {
  // if (count === 0) {
    let data = line.split(' ');
    n = parseInt(data[0]);
    
    // if (n === 1) {
      //   console.log(1)
      // } else if (n === 2){
        //   console.log(2)
        // } else {
    if (n === 1) {
      console.log(1)
    } else {
      let arr = [];
      for (let i = 1; i <= (n / 2); i++) {
        arr.push((i + Math.ceil(n / Math.pow(2, i)))) 
      }
  
      // console.log(arr)

      arr.sort((a, b) => a - b)
      console.log(arr[0])
    }
    
    
    // }
  // }
  // count++  
});
