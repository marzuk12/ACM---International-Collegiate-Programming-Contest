const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0;
var arr = [];
var arrB= [];
var arrF= [];
var numF, numB;
var count2 = 0;

rl.on('line', (line) => {
  if (count === 0) {
    var gears = line.split(' ');
    numF = parseInt(gears[0]);
    numB = parseInt(gears[1]);

    // console.log(n)
  } else if (count === 1) {
    arrF = line.split(' ');
  } else {
    arrB = line.split(' ');

    arrF.forEach((f) => {
      arrB.forEach((b) => {
        var gearObj = {
          f: f,
          b: b,
          r: parseInt(f) / parseInt(b),
        }

        arr.push(gearObj)
      })
    })

    arr.sort((a, b) => {
      if ((a.f * b.b) === (b.f * a.b)) {
        return a.f - b.f
      } 
      return (a.f * b.b) - (b.f * a.b)
    })
    
    arr.forEach((g) => {
      console.log(`(${g.f},${g.b})`)
    })
  }
  count++  
});
