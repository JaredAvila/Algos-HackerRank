//brute force
//O(n^2)

// function hasPairWithSum(arr, sum) {
//   let len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - 1; j++) {
//       if (arr[i] + arr[j] === sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

//cleaner method
//O(n)

function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum2([2, 8, 9, 10], 4));
