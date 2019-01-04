// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

// Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

// For example, if the string s="abcac" and n=10, the substring we consider is 'abcacabcac', the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

function repeatedString(s, n) {
  let count = 0;
  let d = Math.floor(n / s.length);
  let r = n % s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  count *= d;
  for (let j = 0; j < r; j++) {
    if (s[j] === "a") {
      count++;
    }
  }
  return count;
}

console.log(repeatedString("aba", 10)); //should print 7
