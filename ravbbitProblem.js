const rabbitProblem = arr => {
  //find the center indices and set carrots to 0
  let i = Math.floor(arr.length / 2),
    j = Math.floor(arr[0].length / 2),
    carrots = 0;
  if (arr.length % 2 !== 0) {
    //Exact center, consume square
    carrots += arr[i][j];
    helper(arr, i, j, carrots);
  } else {
    //Not exact center, don't consume squre
    helper(arr, i, j, carrots);
  }
};
const emptySpace = elem => {
  if (elem === undefined || elem === 0) {
    true;
  } else {
    return false;
  }
};

const isbiggest = arr => {
  for (let i = 1; i < arr.length; i++) {
    let max = arr[0];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const helper = (arr, i, j, carrots) => {
  //check to see if all surrounding spaces are 0 or null.
  if (
    (arr[i][j - 1] === 0 || arr[i][j - 1] == undefined) &&
    (arr[i][j + 1] === 0 || arr[i][j + 1] == undefined) &&
    (arr[i - 1][j] === 0 || arr[i - 1][j] == undefined) &&
    (arr[i + 1][j] === 0 || arr[i + 1][j] == undefined)
  ) {
    return carrots;
  } else {
    let max = 0,
      left,
      right,
      up,
      down;
    if (emptySpace(arr[i - 1])) {
      up = 0;
    }
    if (emptySpace(arr[i + 1][j])) {
      down = 0;
    }
    if (emptySpace(arr[i][j - 1])) {
      left = 0;
    }
    if (emptySpace(arr[i][j + 1])) {
      right = 0;
    }
    if (left > max) {
      max = left;
    }
    if (right > max) {
      max = right;
    }
    if (up > max) {
      max = up;
    }
    if (down > max) {
      max = down;
    }
    carrots += max;
    if (max === left) {
      if (j > 0) {
        j--;
      }
    } else if (max === right) {
      if (j < arr[0].length - 1) {
        j++;
      }
    } else if (max === up) {
      if (i > 0) {
        i--;
      }
    } else if (max === down) {
      if (i < arr.length - 1) {
        j++;
      }
      i++;
    }
    return helper(arr, i, j, carrots);
  }
};

console.log(
  rabbitProblem([
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
  ])
);
