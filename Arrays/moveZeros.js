const moveZeros = nums => {
  let length = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (length <= 0) {
      return nums;
    }
    while (nums[i] === 0 && length > 0) {
      nums.splice(i, 1);
      nums.push(0);
      length--;
    }
    length--;
  }
};
const myArr = [1, 0, 2, 3, 0, 4, 5, 6, 0, 10];
console.log(moveZeros(myArr));
