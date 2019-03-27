const bracesValid = s => {
  let stack = [];
  let pair = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    }
    if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      let temp = stack.pop();
      if (pair[temp] !== s[i]) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
let test = "({[{}()]})"; //should be true
let test2 = "({[{}[)]})"; //should be false
console.log(bracesValid(test));
console.log(bracesValid(test2));
