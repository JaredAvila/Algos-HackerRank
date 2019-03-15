//Iterative Solution with DP
function houseRobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let memo = new Array(nums.length).fill(0);
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
    console.log(memo);
  }
  return memo[nums.length - 1];
}

//Recursive Solution with DP
function houseRobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let memo = {},
    i = 0,
    total = 0;
  return Math.max(rec(nums, i, total, memo), rec(nums, i + 1, total, memo));
}

function rec(nums, i, total, memo) {
  total += nums[i];
  if (i >= nums.length - 2) return total;
  if (!nums[i + 3]) {
    total += nums[i + 2];
    return total;
  }
  if (memo[i] === 2 || memo[i] === 3) {
    return rec(nums, i + memo[i], total, memo);
  }
  if (rec(nums, i + 2, total, memo) > rec(nums, i + 3, total, memo)) {
    memo[i] = 2;
    return rec(nums, i + 2, total, memo);
  } else {
    memo[i] = 3;
    return rec(nums, i + 3, total, memo);
  }
}

// let nums = [1, 2, 3, 4, 5, 6];
// console.log(houseRobber(nums));
