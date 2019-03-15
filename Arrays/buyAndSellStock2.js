var maxProfit = function(prices) {
  let total = 0,
    currentStock = null;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      if (currentStock === null) {
        currentStock = prices[i];
      }
    }
    if (prices[i] > prices[i + 1]) {
      if (currentStock !== null) {
        let profit = prices[i] - currentStock;
        total += profit;
        currentStock = null;
        console.log("the total is: ", total);
      }
    }
    if (i === prices.length - 1 && currentStock !== null) {
      let profit = prices[i] - currentStock;
      total += profit;
    }
  }
  return total;
};

let arr = [1, 2, 3, 4, 5];
console.log(maxProfit(arr));
