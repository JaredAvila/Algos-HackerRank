function selectionSort(arr) {
  const length = arr.length;
  let min, temp;
  for (let i = 0; i < length; i++) {
    min = i;
    temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(selectionSort(numbers));
