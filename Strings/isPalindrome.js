// const text = "felloWorld";
const regex = /^[0-9a-zA-Z]+$/i;

// console.log(regex.test(text[0]));

const isPalindrome = s => {
  let i = 0,
    j = s.length - 1,
    length = s.length;
  s = s.toLowerCase();
  while (length !== 0) {
    console.log(length, s[i], s[j]);
    while (!regex.test(s[i]) && s[i]) {
      console.log("not a char i");
      i++;
    }
    while (!regex.test(s[j]) && s[j]) {
      console.log("not a char j");
      j--;
    }
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
    length--;
  }
  return true;
};

console.log(isPalindrome(""));
