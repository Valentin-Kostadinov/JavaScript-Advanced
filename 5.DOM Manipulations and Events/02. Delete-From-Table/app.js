function deleteByEmail() {
  const email = document.querySelector('input[name = "email"]').value;
  const resultElement = document.getElementById("result");

  const rows = [...document.querySelectorAll("tbody tr")];

  let deleted = false;

  const matches = rows.filter((r) => r.children[1].textContent == email);
  if (matches.length > 0) {
    matches.forEach((r) => r.remove());
    resultElement.textContent = "Deleted.";
  } else {
    resultElement.textContent = "Not Found.";
  }
}
