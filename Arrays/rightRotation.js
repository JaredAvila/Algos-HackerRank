const rotate = function(nums, k) {
  if (k === 0) return nums;
  if (nums.length <= 1) return nums;
  for (let i = k; i > 0; i--) {
    let temp = nums.pop();
    nums.unshift(temp);
  }
  return nums;
};

let arr = [1, 2, 3, 4, 5],
  k = 3;
console.log(rotate(arr, k));
