const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let boardArr = [];

rl.on('line', (line) => {
  let data = line.toString();
  boardArr.push(data);

  if (count === 7) {
    if (checkAllColumns() && checkAllRows() && checkAllDiagonalsLtoR() && checkAllDiagonalsRtoL()) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }
  
  count++
});

// row is an integer representing the index of boardArr to be checked
function isValidRow(row) {
  let rowStr = boardArr[row];
  let numQueens = 0;
  let element = '';
  for (let i = 0; i < rowStr.length; i++) {
    element = rowStr[i];
    if (element === '*') {
      numQueens++;
    }
  }

  return numQueens > 1 ? false : true;
}

// column is an integer representing the index of each string to be checked
function isValidColumn(column) {
  let numQueens = 0;
  
  boardArr.forEach(row => {
    if (row[column] === '*') {
      numQueens++
    }
  })

  return numQueens > 1 ? false : true;
}

// (row, column) are the start position of the diagonal going L to R 
function isValidDiagonalLtoR(row, column) {
  let numQueens = 0;
  for (let i = row; i <= 7 && column <= 7; i++) {
    if (boardArr[i][column] === '*') {
      numQueens++    
    }

    // console.log('\nnumQueens :', numQueens);
    // console.log('i :', i);
    // console.log('column :', column);
    // console.log('boardArr[i][column] :', boardArr[i][column] + '\n');

    column++
  }

  return numQueens > 1 ? false : true;
}

// (row, column) are the start position of the diagonal going R to L
function isValidDiagonalRtoL(row, column) {
  let numQueens = 0;
  for (let i = row; i <= 7 && column >= 0; i++) {
    if (boardArr[i][column] === '*') {
      numQueens++    
    }

    // console.log('\nnumQueens :', numQueens);
    // console.log('i :', i);
    // console.log('column :', column);
    // console.log('boardArr[i][column] :', boardArr[i][column] + '\n');

    column--
  }
  
  return numQueens > 1 ? false : true;
}

function checkAllRows() {
  let valid = true;
  for (let i = 0; i <= 7 && valid; i++) {
    valid = isValidRow(i);
  }

  return valid;
}

function checkAllColumns() {
  let valid = true;
  for (let i = 0; i <= 7 && valid; i++) {
    valid = isValidColumn(i);
  }

  return valid;
}

function checkAllDiagonalsLtoR() {
  let validDown = true;
  for (let i = 0; i < 7 && validDown; i++) {
    validDown = isValidDiagonalLtoR(i, 0);
  }
  
  let validAccross = true;
  for (let i = 1; i < 7 && validAccross; i++) {
    validAccross = isValidDiagonalLtoR(0, i);
  }

  return validDown && validAccross;
}

function checkAllDiagonalsRtoL() {
  let validDown = true;
  for (let i = 0; i < 7 && validDown; i++) {
    validDown = isValidDiagonalRtoL(i, 7);
  }
  
  let validAccross = true;
  for (let i = 6; i > 0 && validAccross; i--) {
    validAccross = isValidDiagonalRtoL(0, i);
  }

  return validDown && validAccross;
}