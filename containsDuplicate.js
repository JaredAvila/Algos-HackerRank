// O(n), 96ms runtime

const containsDuplicate = nums => {
  if (nums.length <= 1) {
    return false;
  }
  let table = {};
  for (let i = 0; i < nums.length; i++) {
    if (table[nums[i]] == null) {
      table[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};

// const arr1 = ["a", "r", "z", "q", "b"];
// const arr2 = ["v", "s", "f", "h", "r"];

// function containstDuplicate(arr1, arr2) {
//   return arr1.some(item => arr2.includes(item));
// }

// containstDuplicate(arr1, arr2);
