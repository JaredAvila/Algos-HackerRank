var removeOuterParentheses = function(S) {
  const ans = [];
  const stack = [];
  let firstChar = 1;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push(S[i]);
    } else if (S[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        if (stack.length === 0) {
          ans.push(S.slice(firstChar, i));
          firstChar = i + 2;
        }
      }
    }
  }
  return ans.join("");
};
const wordUp = "()()";
console.log(removeOuterParentheses(wordUp));
