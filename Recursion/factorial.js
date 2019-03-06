//Recursively

function findFactorial(num) {
  if (typeof num !== "number") {
    return false;
  } else if (num <= 0) {
    return false;
  } else {
    if (num === 2 || num === 1) {
      return num;
    } else {
      return num * findFactorial(num - 1);
    }
  }
}

//Iteratively

// function findFactorial(num) {
//   let total = num;
//     if(num === 2 || num === 1){
//         return num;
//     }
//   for (let i = num; i > 1; i--) {
//     total *= i - 1;
//   }
//   return total;
// }
console.log(findFactorial(3));
