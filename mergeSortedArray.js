//takes two sorted arrays and returns a single sorted array
//populated with the combined values of the two arrays

function mergeSortedArrays(arr1, arr2) {
  const newArr = [];
  let arr1Item = arr1[0],
    arr2Item = arr2[0],
    i = 1,
    j = 1;

  //check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      newArr.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      newArr.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return newArr;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
