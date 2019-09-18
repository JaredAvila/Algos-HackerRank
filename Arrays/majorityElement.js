var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let val = map.get(nums[i]) + 1;
      if (val > nums.length / 2) return nums[i];
      map.set(nums[i], val);
    } else {
      map.set(nums[i], 1);
    }
  }
  return null;
};

const arr = [4, 3, 4, 5, 3, 4, 4];
console.log(majorityElement(arr));
