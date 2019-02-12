const helper = (arr, target, index) => {
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[index] + arr[i] == target) {
      return [index, i];
    }
  }
  index++;
  if (index === arr.length - 1) {
    return [];
  } else {
    return helper(arr, target, index);
  }
};
const twoSum = (arr, target) => {
  let index = 0;
  return helper(arr, target, index);
};

let myArr = [4, 2, 5, 9, 8, 6, 4];
let target = 20;
console.log(twoSum(myArr, target));
