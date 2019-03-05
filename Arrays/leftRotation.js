// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

//Constraints: a, n and d are >= 1;

function rotLeft(a, d) {
  let temp;
  for (let i = 0; i < d; i++) {
    temp = a.shift();
    a.push(temp);
  }
  return a;
}

const arr = [1, 2, 3, 4, 5];
const num = 2;

console.log(rotLeft(arr, num));
