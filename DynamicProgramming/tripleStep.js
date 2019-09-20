let calculations = 0;
function countWays(n) {
  calculations++;
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
  }
}

function fasterCountWays() {
  const cache = {};
  return function mem(n) {
    if (n in cache) {
      return cache[n];
    }
    calculations++;
    if (n < 0) {
      return 0;
    } else if (n === 0) {
      return 1;
    } else {
      cache[n] = mem(n - 1) + mem(n - 2) + mem(n - 3);
      return cache[n];
    }
  };
}

let steps = 200;
// console.log(countWays(steps));
const memSolution = fasterCountWays();
console.log(memSolution(steps));
console.log(`We did ${calculations} calculations`);
