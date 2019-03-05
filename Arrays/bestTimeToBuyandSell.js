//0(n), 72ms runtime
const stock = arr => {
  let stocks = { min: arr[0], max: arr[0], profit: 0 };
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < stocks["min"]) {
      stocks["min"] = arr[i];
      stocks["max"] = null;
    } else if (stocks["max"] === null || arr[i] > stocks["max"]) {
      stocks["max"] = arr[i];
      if (stocks["profit"] < stocks["max"] - stocks["min"]) {
        stocks["profit"] = stocks["max"] - stocks["min"];
      }
    }
  }
  return stocks["profit"];
};

let myArr = [2, 5, 7, 2, 10, 8, 1, 5]; //should return 8
console.log(stock(myArr));
