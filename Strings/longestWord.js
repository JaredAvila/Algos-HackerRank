function longestWord(s, d) {
  let longest = "";
  for (let i = 0; i < d.length; i++) {
    let max = d[i].length;
    let index = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[j] === d[i][index]) {
        index++;
        if (index === max) {
          if (d[i].length > longest.length) {
            longest = d[i];
          }
          j = s.length;
        }
      }
    }
  }
  if (longest.length === 0) {
    return null;
  }
  return longest;
}

const letters = "abpppleepine";
const words = ["able", "ale", "kangaroo", "absolute", "pineapple"];

console.log(longestWord(letters, words));
