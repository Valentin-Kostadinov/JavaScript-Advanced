function solve(input) {
  let result = [];

  for (let i = 0; i < input.length; i += 2) {
    result[result.length] = input[i];
  }
  console.log(result.join(" "));
}

solve(["20", "30", "40", "50", "60"]);
solve(["5", "10"]);
