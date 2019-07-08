const numJewelsInStones = function(J, S) {
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (J.indexOf(S.charAt(i)) !== -1) {
      count++;
    }
  }
  return count;
};

const J = "aA";
const S = "aAAbbb";

console.log(numJewelsInStones(J, S));
