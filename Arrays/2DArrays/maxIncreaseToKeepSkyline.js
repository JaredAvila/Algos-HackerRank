const maxIncreaseToKeepSkyline = grid => {
  if (grid.length === 1) {
    return 0;
  }
  const { rows, columns } = getMaxSkyline(grid);
  let total = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      total += Math.min(rows[i], columns[j]) - grid[i][j];
    }
  }
  return total;
};

const getMaxSkyline = grid => {
  const rows = [];
  const columns = [];

  for (let i = 0; i < grid.length; i++) {
    rows.push(Math.max(...grid[i]));
    const temp = [];
    for (let j = 0; j < grid[i].length; j++) {
      temp.push(grid[j][i]);
    }
    columns.push(Math.max(...temp));
  }
  return { rows, columns };
};

const sampleGrid = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]];

console.log(maxIncreaseToKeepSkyline(sampleGrid));
