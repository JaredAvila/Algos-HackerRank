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
