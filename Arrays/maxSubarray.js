const maxSubArray = nums => {
  let max = nums[0],
    table = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      table.push({ sum: 0 });
    }
    table.forEach(el => {
      el.sum += nums[i];
      if (el.sum > max) {
        max = el.sum;
      }
    });
  }
  return max;
};

const myArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(myArray));
