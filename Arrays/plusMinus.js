//Given an array of integers print out three decimal numbers
//  representing the ratios of:
//                  1.) postive numbers to the size of the array
//                  2.) negative numbers to the size of the array
//                  3.) zeros to the size of the array

//   ex/     given arr = [2, 1, 0, -9, -3]
//                  since there are 2 positive, 2 negative and 1 zero
//                  function should print:
//                      0.40000
//                      0.40000
//                      0.20000

const plusMinus = arr => {
  //check for empty array
  if (arr.length === 0) {
    console.log(zero);
    return;
  }
  //else: run core logic
  let positive = 0,
    negative = 0,
    zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative++;
    }
    if (arr[i] === 0) {
      zero++;
    }
    if (arr[i] > 0) {
      positive++;
    }
  }
  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
};

let nums = [1, 2, 0, -2, -9];
plusMinus(nums);
