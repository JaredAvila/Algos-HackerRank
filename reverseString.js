//create a function that reverses a string

// function reverse(str) {
//   let backwards = [];
//   let totatItems = str.length - 1;
//   for (let i = totatItems; i >= 0; i--) {
//     backwards.push(str[i]);
//   }
//   return backwards.join("");
// }

//es6
const reverse2 = str => [...str].reverse().join("");

console.log(reverse2("what the hell?!"));
