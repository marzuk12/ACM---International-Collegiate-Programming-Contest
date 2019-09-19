const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let N, M;
let reqHeight;

rl.on('line', (line) => {
  if (count === 0) {
    let data = line.split(' ');
    N = parseInt(data[0]);
    M = parseInt(data[1]);
  } else {
    let data2 = line.split(' ');

    data2.sort((a, b) => b - a);

    let woodTotal = 0;
    let exit = false;
    let stoppedAt = 0;
    let stoppedAtHeight = 0;
    for (let i = 1; i < data2.length && !exit; i++) {
      woodTotal = 0;
      for (let j = 0; j < i; j++) {
        woodTotal += data2[j] - data2[i];
      }
      if (woodTotal >= M) {
        exit = true;
        stoppedAt = i;
        stoppedAtHeight = data2[i];
      }      
    }

    let wastedWood = woodTotal - M;
    reqHeight = Math.floor(wastedWood / (stoppedAt)) + parseInt(stoppedAtHeight);

    // console.log('stoppedAtHeight :', stoppedAtHeight);
    // console.log('stoppedAt :', stoppedAt);
    // console.log('data2 :', data2);
    // console.log('woodTotal :', woodTotal);
    // console.log('wastedWood :', wastedWood);
    // console.log('reqHeight :', reqHeight);

    console.log(reqHeight);
  }
  
  count++  
});
