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

const twoSumDP = function(nums, target) {
  let memo = {};
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (memo[comp] != null) {
      return [memo[comp], i];
    }
    memo[nums[i]] = i;
  }
  return [];
};

let myArr = [4, 2, 5, 9, 8, 6, 4];
let target = 10;
console.log(twoSumDP(myArr, target));
