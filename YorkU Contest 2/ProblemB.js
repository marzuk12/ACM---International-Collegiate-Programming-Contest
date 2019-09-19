const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let outStr = '';
let digitArr = [
  {
    1: '+---+',
    2: '|   |',
    3: '|   |',
    4: '+   +',
    5: '|   |',
    6: '|   |',
    7: '+---+',
  },
  {
    1: '    +',
    2: '    |',
    3: '    |',
    4: '    +',
    5: '    |',
    6: '    |',
    7: '    +',
  },
  {
    1: '+---+',
    2: '    |',
    3: '    |',
    4: '+---+',
    5: '|    ',
    6: '|    ',
    7: '+---+',
  },
  {
    1: '+---+',
    2: '    |',
    3: '    |',
    4: '+---+',
    5: '    |',
    6: '    |',
    7: '+---+',
  },
  {
    1: '+   +',
    2: '|   |',
    3: '|   |',
    4: '+---+',
    5: '    |',
    6: '    |',
    7: '    |',
  },
  {
    1: '+---+',
    2: '|    ',
    3: '|    ',
    4: '+---+',
    5: '    |',
    6: '    |',
    7: '+---+',
  },
  {
    1: '+---+',
    2: '|    ',
    3: '|    ',
    4: '+---+',
    5: '|   |',
    6: '|   |',
    7: '+---+',
  },
  {
    1: '+---+',
    2: '    |',
    3: '    |',
    4: '    +',
    5: '    |',
    6: '    |',
    7: '    +',
  },
  {
    1: '+---+',
    2: '|   |',
    3: '|   |',
    4: '+---+',
    5: '|   |',
    6: '|   |',
    7: '+---+',
  },
  {
    1: '+---+',
    2: '|   |',
    3: '|   |',
    4: '+---+',
    5: '    |',
    6: '    |',
    7: '+---+',
  },
  {
    1: '     ',
    2: '     ',
    3: '  o  ',
    4: '     ',
    5: '  o  ',
    6: '     ',
    7: '     ',
  },
]


rl.on('line', (line) => {
  let data = line.split(':');
  let num1 = parseInt(data[0]);
  let num2 = parseInt(data[1]);
  
  // console.log('num1 :', num1);

  if (isNaN(num1)) {
    console.log(outStr + 'end')
  } else {
    let firstDigitHr = Math.floor(num1 / 10)
    let secondDigitHr = num1 % 10

    let firstDigitMin = Math.floor(num2 / 10)
    let secondDigitMin = num2 % 10

    for (let i = 1; i <= 7; i++) {
      outStr += digitArr[firstDigitHr][i] + '  ' + digitArr[secondDigitHr][i] + digitArr[10][i] + digitArr[firstDigitMin][i] + '  ' + digitArr[secondDigitMin][i] + '\n';
    }
    outStr += '\n\n'
  }  
});

