//Find and return the first unique character in a give string
// if str = "weezer" should return 'w'
// if str = 'lovelacelots' should return 'v'
// if str = 'eeiioouu' should return -1
// assume that all chars in string are lower case

const firstUniqueString = str => {
  const myMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (myMap.has(str[i])) {
      myMap.set(str[i], false);
    } else {
      myMap.set(str[i], i);
    }
  }
  for ([key, value] of myMap) {
    if (value !== false) {
      return value;
    }
  }
  return -1;
};

console.log(firstUniqueString("lleettccoodde"));
