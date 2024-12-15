function solve(arr) {
  let sorted = arr.sort().map((name, index) => {
    return `${index + 1}.${name}`;
  });
  console.log(sorted.join("\n"));
}

solve(["John", "Bob", "Christina", "Ema"]);
