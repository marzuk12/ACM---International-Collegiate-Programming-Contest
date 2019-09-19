const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0;
var arr = [];
var x, y, n;
var count2 = 0;

rl.on('line', (line) => {
  if (count === 0) {
    var me = line.split(' ');
    x = parseInt(me[0]);
    y = parseInt(me[1]);
    n = parseInt(me[2]);

    // console.log(n)
  } else {
    var en = line.split(' ');
    var x1 = parseInt(en[0]);
    var y1 = parseInt(en[1]);
    var r = parseInt(en[2]);

    // console.log(x1 + ' ' + y1 + ' ' + r)
    
    var d = Math.pow(Math.pow((x - x1), 2) + Math.pow((y - y1), 2), 0.5)

    // console.log(d-r)
    if (d - r <= 0) {
      count2++
    }

    arr.push(d - r)
    // console.log(arr)
  }

  if (count === n) {
    arr.sort((a, b) => a - b)
    
    if (count2 >= 3) {
      
      console.log(0)
    } else {

      console.log(Math.floor(arr[2]))
    }
    
  }
  
  count++  
});
