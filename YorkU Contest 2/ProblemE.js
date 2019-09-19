const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let T, N, V1, V2, W;
let arr = [];

rl.on("line", (line) => {
  if (count === 0) {
    let data = line.split(" ");
    T = parseInt(data[0]);
  } else {
    let data2 = line.split(" ");
    N = parseInt(data2[0]);
    V1 = parseInt(data2[1]);
    V2 = parseInt(data2[2]);
    W = parseInt(data2[3]);

    if (V2 > N / 2) {
      console.log("RECOUNT!");
    } else if (V1 > N / 2) {
      console.log("GET A CRATE OF CHAMPAGNE FROM THE BASEMENT!");
    } else {
      let votesRequired = Math.floor(N / 2) + 1;
      let M = N - V1 - V2;
      let winProbability = 0;
      
      for (let i = votesRequired; i <= M; i++) {
        winProbability += ((factorial(M) / (factorial(i) * factorial(M - i))) / Math.pow(2, M)) * 100
      }
      
      if (winProbability > W) {
        console.log("GET A CRATE OF CHAMPAGNE FROM THE BASEMENT!");
      } else {
        console.log('PATIENCE, EVERYONE!')
      }
    }
  }
  count++;
});

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
