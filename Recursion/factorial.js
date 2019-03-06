function findFactorial(num) {
  if (typeof num !== "number") {
    return false;
  } else if (num <= 0) {
    return false;
  } else {
    if (num === 1) {
      return num;
    } else {
      return num * findFactorial(num - 1);
    }
  }
}
console.log(findFactorial(5));
