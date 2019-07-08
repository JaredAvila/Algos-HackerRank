const toLowerCase = str => {
  return str
    .split("")
    .map(char => {
      const charCode = char.charCodeAt(0);
      return charCode >= 65 && charCode <= 90
        ? String.fromCharCode(charCode + 32)
        : char;
    })
    .join("");
};

console.log(toLowerCase("JesuS CHrist"));
