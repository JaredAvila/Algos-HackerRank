function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return num;
  }
}

function factorialIt(num) {
  let total = num;
  while (num > 1) {
    num--;
    total *= num;
  }
  return total;
}

console.log(factorialIt(4));
