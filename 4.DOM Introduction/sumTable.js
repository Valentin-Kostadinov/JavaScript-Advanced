function sumTable() {
  let rows = [...document.querySelectorAll("table tr")].slice(1, -1);

  let sum = 0;

  document.getElementById("sum").textContent = rows.reduce((sum, row) => {
    return sum + Number(row.lastElementChild.textContent);
  }, 0);
}
