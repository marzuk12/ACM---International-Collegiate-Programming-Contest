const readline = require("readline");
const { performance } = require('perf_hooks');

let startTime;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let nodes = [0];
let N, K, Q;
let N1, N2;
let resultsArr = [];

rl.on("line", (line) => {
  if (count === 0) {
    startTime = performance.now();

    let data = line.split(" ");
    N = parseInt(data[0]);
    K = parseInt(data[1]);
    Q = parseInt(data[2]);

    for (let i = 1; i <= N; i++) {
      nodes[i] = {
        depth: 0,
        parent: 0,
        // children: []
      };
    }

    let exit;
    for (let i = 1; i <= N; i++) {
      let nodesAdded = 0;
      exit = false;
      for (let j = 2 + (i - 1) * K; j <= N && !exit; j++) {
        if (nodesAdded < K) {
          // nodes[i].children.push(j);
          nodes[j].parent = i;
          nodes[j].depth = nodes[i].depth + 1;
          nodesAdded++;

          // console.log('nodesAdded :', nodesAdded);
          // console.log('i :', i);
          // console.log('j :', j);
          // console.log('K :', K);
        } else {
          exit = true
        }
      }
    }

    // console.log('isParent(5, 1) :', isParent(5, 1));
    // console.log('isParent(5, 2) :', isParent(5, 2));

    // console.log('isChild(1, 5) :', isChild(1, 5));
    // console.log('isChild(2, 5) :', isChild(2, 5));

    // console.log('isSibling(2, 7) :', isSibling(2, 7));
    // console.log('isSibling(2, 4) :', isSibling(2, 4));

    // console.log('findAncestorOfSameDepth(18, 15) :', findAncestorOfSameDepth(18, 7));
    // console.log('findAncestorOfSameDepth(20, 11) :', findAncestorOfSameDepth(20, 11));

    // console.log('stepsSameDepth(16, 18) :', stepsSameDepth(16, 18));
    // console.log('stepsSameDepth(16, 18) :', stepsSameDepth(9, 13));

    console.log('\nStructure generation time: ' + (performance.now() - startTime).toString() + ' ms\n')

    // console.log(nodes)
  } else {
    startTime = performance.now();
    
    let data2 = line.split(" ");
    N1 = parseInt(data2[0]);
    N2 = parseInt(data2[1]);

    // if (isChild(N1, N2)) {
    //   resultsArr.push(1);
    // } else if (isParent(N1, N2)) {
    //   resultsArr.push(1);
    // } else {
    //   resultsArr.push(steps(N1, N2));
    // }

    resultsArr.push(steps(N1, N2));

    if (count >= Q) {

      resultsArr.forEach((steps) => {
        console.log(steps);
      });

      console.log('\nResults generation time: ' + (performance.now() - startTime).toString() + ' ms\n')
    }
  }

  count++;
});

function isParent(child, parent) {
  return nodes[child].parent === parent;
}

function isChild(parent, child) {
  return nodes[parent].children.includes(child);
}

function isSibling(sibling1, sibling2) {
  return nodes[sibling1].parent === nodes[sibling2].parent;
}

// Expects node1 has higher depth than node2
function findAncestorOfSameDepth(node1, node2) {
  let depthDiff = nodes[node1].depth - nodes[node2].depth;

  let ancestor = node1;
  for (let i = 0; i < depthDiff; i++) {
    ancestor = nodes[ancestor].parent;
  }

  return ancestor;
}

// Expects node1 has higher depth than node2
function isAncestor(node1, node2) {
  return findAncestorOfSameDepth(node1, node2) === node2
}

// Finds the step between two nodes in the same level
function stepsSameDepth(node1, node2) {
  let steps = 2;

  let maxDepth = nodes[nodes.length - 1].depth;
  let n1 = node1;
  let n2 = node2;
  let exit = false;

  for (let i = 0; i < maxDepth && !exit; i++) {
    if (isSibling(n1, n2)) {
      exit = true;
    } else {
      n1 = nodes[n1].parent;
      n2 = nodes[n2].parent;
      steps += 2;
    }
  }

  return steps;
}

// Finds steps between two nodes, given that they are not parent-child
function steps(node1, node2) {
  let steps = 0;

  if (nodes[node1].depth === nodes[node2].depth) {
    steps = stepsSameDepth(node1, node2);
  } else if (nodes[node1].depth > nodes[node2].depth) {
    if (isAncestor(node1, node2)) {
      steps = nodes[node1].depth - nodes[node2].depth
    } 
    else {
      let depthDiff = nodes[node1].depth - nodes[node2].depth;
      let node1Ancestor = findAncestorOfSameDepth(node1, node2);
  
      steps = stepsSameDepth(node1Ancestor, node2) + depthDiff;
    }
  } else if (nodes[node1].depth < nodes[node2].depth) {
    if (isAncestor(node2, node1)) {
      steps = nodes[node2].depth - nodes[node1].depth
    } else {
      let depthDiff = nodes[node2].depth - nodes[node1].depth;
      let node2Ancestor = findAncestorOfSameDepth(node2, node1);
  
      steps = stepsSameDepth(node2Ancestor, node1) + depthDiff;
    }
  }

  return steps;
}
