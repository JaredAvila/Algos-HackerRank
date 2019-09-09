var uniqueMorseRepresentations = function(words) {
  const morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];
  const cache = new Set();
  words.forEach(el => {
    let codedWord = "";
    for (let i = 0; i < el.length; i++) {
      codedWord += morseCode[el.charCodeAt(i) - 97];
    }
    cache.add(codedWord);
  });
  return cache.size;
};

const array = ["hello", "my", "baby", "hello", "my", "baby"];
console.log(uniqueMorseRepresentations(array));
