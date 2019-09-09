var climbStairs = function(n) {
  let arr = [1, 2, 3];
  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
};

console.log(climbStairs(10));
