const conatinsDuplicate = nums => {
  if (nums.length < 2) {
    return false;
  }
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], true);
  }
  return false;
};

const conatinsDuplicateSet = nums => {
  if (nums.length < 2) {
    return false;
  }
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, 5, 7, 8];

console.log(conatinsDuplicateSet(arr));
