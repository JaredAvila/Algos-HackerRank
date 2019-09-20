function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const cache = {};
  let max = 0;
  const move = (i, total) => {
    total += nums[i];
    if (nums[i + 2]) {
      move(i + 2, total);
    }
    if (nums[i + 3]) {
      move(i + 3, total);
    }
    if (total > max) {
      max = total;
    }
    total -= nums[i];
    return;
  };
  move(0, 0);
  move(1, 0);
  return max;
}

let houses = [1, 3, 5, 2, 4, 1];
console.log(rob(houses));
