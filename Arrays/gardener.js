function watering(plants, capacity) {
  let can = capacity;
  let steps = 0;
  for (let i = 0; i < plants.length; i++) {
    steps++;
    can -= plants[i];
    if (!plants[i + 1]) return steps;
    if (plants[i + 1] > can) {
      steps += 2 * (i + 1);
      can = capacity;
    }
  }
}

const plants = [2, 4, 5, 1, 2];
const cap = 6;
console.log(watering(plants, cap));
