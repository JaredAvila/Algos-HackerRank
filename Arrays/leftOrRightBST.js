const solution = arr => {
  if (arr.length <= 1) return "";
  if (arr.length === 2) return "Left";
  let left = rec(arr, 1, 0);
  let right = rec(arr, 2, 0);
  if (left === right) {
    return "";
  } else if (left > right) {
    return "Left";
  } else if (right > left) {
    return "Right";
  }
};

const rec = (arr, i, total) => {
  if (arr[i] === -1 || !arr[i]) {
    return total;
  } else {
    total += arr[i];
    let index = i * 2;
    total = rec(arr, index + 1, total);
    total = rec(arr, index + 2, total);
    return total;
  }
};

const myArr = [1, 10, 5, 1, 0, 6];
console.log(solution(myArr));
