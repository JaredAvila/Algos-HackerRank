var uniqueOccurrences = function(arr) {
  let cache = {};
  arr.forEach(num => {
    if (num in cache) {
      cache[num] = cache[num] + 1;
    } else {
      cache[num] = 1;
    }
  });
  let flag = true;
  const mySet = new Set();
  Object.values(cache).forEach(val => {
    if (mySet.has(val)) {
      flag = false;
      return;
    }
    mySet.add(val);
  });
  return flag;
};

const myArr = [1, 2, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(myArr));
