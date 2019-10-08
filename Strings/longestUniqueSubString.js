const solution = s => {
  let cache = {};
  let max = 1;
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in cache) {
      i = cache[s[i]];
      cache = {};
      if (total > max) {
        max = total;
      }
      total = 0;
    } else {
      cache[s[i]] = i;
      total++;
    }
  }
  if (total > max) return total;
  return max;
};

const str = "asnrndfddf";
console.log(solution(str));
