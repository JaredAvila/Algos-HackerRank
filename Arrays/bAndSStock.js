function maxProfit(prices) {
  if (prices.length < 2) return 0;
  let min = 0;
  let total = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[min]) {
      min = i;
    } else {
      let temp = prices[i] - prices[min];
      if (temp > total) {
        total = temp;
      }
    }
  }
  return total;
}

// const nums = [7, 1, 5, 3, 6, 4];
const nums = [];
console.log(maxProfit(nums));
