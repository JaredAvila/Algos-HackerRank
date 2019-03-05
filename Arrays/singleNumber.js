const singleNumber = arr => {
  let obj = new Object();
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = -1;
    }
  }
  for (let o in obj) {
    if (obj[o] === 1) {
      return o;
    }
  }
};
let arr = [4, 1, 2, 1, 2];
console.log(singleNumber(arr));
