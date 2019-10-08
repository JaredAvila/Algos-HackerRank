// const mySet = new Set();

// mySet.add("n");
// mySet.add("o");
// console.log(mySet);
// mySet.clear();
// console.log(mySet);

const solution = s => {
  let mySet = new Set();
  let max = 1;
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (mySet.has(s[i])) {
      if (total > max) {
        max = total;
      }
      mySet.clear();
      mySet.add(s[i]);
      total = 1;
    } else {
      mySet.add(s[i]);
      total++;
    }
  }
  return max;
};

const str = "nndfddf";
console.log(solution(str));
