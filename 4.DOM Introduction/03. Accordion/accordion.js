function toggle() {
  let button = document.querySelector(".button");
  let text = document.getElementById("extra");

  text.style.display =
    text.style.display === "none" || text.style.display === ""
      ? "block"
      : "none";
  button.textContent = button.textContent === "More" ? "Less" : "More";
}
