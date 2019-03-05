const removeDups = nums => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      return removeDups(nums);
    }
  }
  return nums.length;
};

let nums = [1, 1, 2];
console.log(removeDups(nums));
