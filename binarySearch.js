// while loop verison
const binarySearch = (arr, value) => {
  let start = 0,
    end = arr.length - 1,
    mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// recursive solution

const recursiveBinary = (arr, value, start, end) => {
  if (start > end) {
    return -1;
  }
  let mid = start + Math.floor((end - start) / 2);
  if (arr[mid] === value) {
    return mid;
  } else if (arr[mid] < value) {
    return recursiveBinary(arr, value, mid + 1, end);
  } else {
    return recursiveBinary(arr, value, start, mid - 1);
  }
};

let myArray = [1, 2, 3, 6, 10, 14, 16, 18, 21, 24, 27, 34, 67];
let myVal = 34;
