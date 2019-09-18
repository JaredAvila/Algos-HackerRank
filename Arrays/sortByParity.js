var sortArrayByParity = function(A) {
  if (A.length <= 1) {
    return A;
  }
  let evenNums = [],
    oddNums = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evenNums.push(A[i]);
    } else {
      oddNums.push(A[i]);
    }
  }
  return [...evenNums, ...oddNums];
};
var sortArrayByParity2 = function(A) {
  if (A.length <= 1) {
    return A;
  }
  let newArr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      newArr.unshift(A[i]);
    } else {
      newArr.push(A[i]);
    }
  }
  return [newArr];
};

const nums = [4, 7, 9, 2, 4, 3, 10, 38, 2, 11];
// sortArrayByParity(nums);
console.log(sortArrayByParity2(nums));
