//given an n x n matrix return the absolute value
//  of the sum of the diagonals starting from the left and right corners
//  ex/    [[2, 4, 5],
//          [3, 2, 7],
//          [5, 8, 1]]    would return |5-12| = 7
//                          since leftDiagonal: 2 + 2 + 1 = 5
//                          and rightDiagonal: 5 + 2 + 5 = 12
//  Inputs: n = size of matrix, arr = the (n x n) matrix

const diagonalSum = (n, arr) => {
  //check if there are less than two elements. Always returns 0;
  if (n < 2) {
    return 0;
  }
  //else: core logic will run
  let left = 0,
    right = 0,
    last = arr.length - 1;
  for (let i = 0; i <= last; i++) {
    left += arr[i][i];
    right += arr[i][last - i];
  }
  //return absolute value of the difference
  return Math.abs(left - right);
};

//test cases
let matrix = [[2, 4, 5], [3, 2, 7], [5, 8, 1]];
let matrix2Reloaded = [[]];
let matrix3Revolutions = [[200002]];

console.log(diagonalSum(3, matrix)); //should return 7
console.log(diagonalSum(0, matrix2Reloaded)); //should return 0
console.log(diagonalSum(1, matrix3Revolutions)); //should also return 0
