function solve(matrix) {
  let rowSums = [];
  let colSums = [];

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let sum = row.reduce((result, current) => result + current, 0);
    rowSums.push(sum);
  }

  for (let i = 0; i < matrix.length; i++) {
    let newRow = [];
    for (let y = 0; y < matrix.length; y++) {
      let index = matrix.length - 1 - y;
      newRow.push(matrix[index][i]);
    }
    let sum = newRow.reduce((result, current) => result + current, 0);
    colSums.push(sum);
  }
  console.log(rowSums, colSums);

  return rowSums
    .concat(colSums)
    .every((element, i, matrix) => element === matrix[0]);
}

console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

console.log("--------------------");

console.log(
  solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
