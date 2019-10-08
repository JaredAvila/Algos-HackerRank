const solution = (parentheses, index) => {
  const last = [];
  for (let i = 0; i < parentheses.length; i++) {
    if (parentheses[i] === "(") {
      last.push(i);
    } else if (parentheses[i] === ")") {
      let openIndex = last.pop();
      if (openIndex === index) {
        return i;
      }
    }
  }
  return -1;
};

const myStr = "((())())";
const myIndex = 1;

console.log(solution(myStr, myIndex));
