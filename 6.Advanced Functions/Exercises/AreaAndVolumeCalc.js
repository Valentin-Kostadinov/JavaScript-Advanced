function solve(area, vol, dataAsJSON) {
  const figures = JSON.parse(dataAsJSON);

  const result = figures.map((figure) => ({
    area: area.call(figure),
    volume: vol.call(figure),
  }));

  return result;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

console.log(
  solve(
    area,
    vol,
    `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
  )
);
