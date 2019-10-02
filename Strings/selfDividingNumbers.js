var selfDividingNumbers = function(left, right) {
  const result = [];
  let num = left;
  while (num <= right) {
    let numStr = num.toString();
    if (numStr.length === 1 && num !== 0) {
      result.push(num);
      num++;
    } else {
      let flag = true;
      for (let i = 0; i < numStr.length; i++) {
        if (num % parseInt(numStr[i]) !== 0 || numStr === "0") {
          flag = false;
        }
      }
      if (flag) {
        result.push(num);
      }
      num++;
    }
  }
  return result;
};
console.log(selfDividingNumbers(1, 22));
