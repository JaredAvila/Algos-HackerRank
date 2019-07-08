var defangIPaddr = function(address) {
  let ipArray = address.split("");
  ipArray.forEach((el, i) => {
    if (el === ".") {
      ipArray[i] = "[.]";
    }
  });
  return ipArray.join("");
};

let address = "1.1.1.1";
console.log(defangIPaddr(address));
