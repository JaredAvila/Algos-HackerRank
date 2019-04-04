function timeConversion(s) {
  let length = s.length;
  if (s[length - 2] === "P") {
    let arr = s.split("");
    let hours = arr.splice(0, 2);
    hours = hours.join("");
    hours = Number(hours) + 12;
    arr.unshift(hours);
    arr = arr.splice(0, arr.length - 2);
    arr = arr.join("");
    return arr;
  }
}

let s = "07:45:33PM";
console.log(timeConversion(s));
