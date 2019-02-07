function minimumSwaps(arr) {
  const swap = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
  };
  let oArr = arr.slice(0),
    newArr = arr.sort((a, b) => a - b),
    count = 0;

  for (var i = 0; i < oArr.length; i++) {
    if (oArr[i] != newArr[i]) {
      for (var j = i + 1; j < oArr.length; j++) {
        if (oArr[j] === newArr[i]) {
          swap(oArr[i], newArr[j]);
          count++;
          //   break;
        }
      }
    }
  }
  return count;
}

console.log(minimumSwaps([4, 3, 1, 2]));
