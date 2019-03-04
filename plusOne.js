const plusOne = digits => {
  if (digits.length === 1) {
    if (digits[0] === 9) {
      digits[0] = 1;
      digits.push(0);
      return digits;
    }
    digits[0]++;
    return digits;
  }
  let index = digits.length - 1;
  if (digits[index] === 9) {
    return isANine(digits, index);
  } else {
    digits[index]++;
    return digits;
  }
};

const isANine = (digits, index) => {
  if (index === 0) {
    digits[index] = 0;
    digits.unshift(1);
    return digits;
  }
  if (digits[index - 1] === 9) {
    digits[index] = 0;
    index--;
    return isANine(digits, index);
  } else {
    digits[index - 1]++;
    digits[index] = 0;
    return digits;
  }
};

console.log(plusOne([9, 9, 9]));
