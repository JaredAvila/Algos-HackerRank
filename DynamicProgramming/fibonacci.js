const fibRecursive = n => {
  if (n < 2) return n;
  return fibRec(n - 1) + fibRec(n - 2);
};
const fibDProgramming = () => {
  const cache = {};
  return function mem(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) return n;
      else {
        cache[n] = mem(n - 1) + mem(n - 2);
        return cache[n];
      }
    }
  };
};

const fasterSolution = fibDProgramming();
console.log(fasterSolution(40)); // takes a fraction of a second to compute
// console.log(fibRecursive(40))  <------- takes about 6 seconds to compute.
