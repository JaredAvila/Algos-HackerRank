// like fibonacci but (n+3) = n + (n+1) + (n+2)

function tribonacci() {
  let memo = {};
  return function mem(n) {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n < 3) return 1;
    memo[n] = mem(n - 1) + mem(n - 2) + mem(n - 3);
    return memo[n];
  };
}

const tribMem = tribonacci();

console.log(tribMem(25));
