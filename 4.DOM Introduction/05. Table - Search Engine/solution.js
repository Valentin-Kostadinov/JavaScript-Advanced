function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const rows = document.querySelector("tbody");

  let convertRows = function (rows, input) {
    return Array.from(rows).map((row) => {
      if (row.textContent.includes(input) && input !== "") {
        row.setAttribute("class", "select");
      } else {
        row.removeAttribute("class");
      }
      return row;
    });
  };

  function onClick() {
    let rows = body.chilren;
    body.innerHtml = convertRows(rows, input.value);
  }
}
