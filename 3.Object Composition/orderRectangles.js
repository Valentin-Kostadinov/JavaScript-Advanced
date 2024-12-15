function solve(input) {
  let result = input.map(([width, height]) => ({
    width,
    height,

    area: () => width * height,
    compareTo(rect) {
      let result = this.area() - rect.area();

      return result == 0 ? this.width - rect.width : result;
    },
  }));

  result.sort((a, b) => b.compareTo(a));

  console.log(result);
}

solve([
  [10, 5],
  [5, 12],
]);
console.log("------------------------");
solve([
  [10, 5],
  [3, 20],
  [5, 12],
]);
