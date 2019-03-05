//given an array write a function that returns the value of the first repeated value found within the array.
//given [2,5,1,2,3,5,1,2,4] it would return 2
//given [1,2,3,4] should return undefined

const firstDuplicate = arr => {
  let table = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (table.has(arr[i])) {
      return arr[i];
    }
    table.add(arr[i]);
  }
  return undefined;
};

console.log(firstDuplicate([1, 2, 3, 4, 1]));
