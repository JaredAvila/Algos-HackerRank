//Recursive Solution

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

//Iterative Solution

function iterativeFib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

//Memoized Solution

function fibMemoized() {
  let memo = {};
  return function fibM(n) {
    if (n in memo) {
      return memo[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        memo[n] = fibM(n - 1) + fibM(n - 2);
        return memo[n];
      }
    }
  };
}

const fasterFib = fibMemoized();
console.log(fasterFib(100));
