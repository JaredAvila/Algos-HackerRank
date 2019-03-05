function sockMerchant(n, ar) {
  let pairs = 0;
  ar.sort();
  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      i += 1;
    }
  }
  return pairs;
}
console.log(sockMerchant(7, [2, 3, 1, 2, 1, 3, 1]));
