function create(words) {
  const output = document.getElementById("content");

  words.forEach((w) => output.appendChild(createArticle(w)));

  function createArticle(text) {
    const pEl = createElements("p", text);
    pEl.style.display = "none";

    const divEl = createElements("div", pEl);
    divEl.addEventListener("click", () => {
      pEl.style.display = "";
    });

    return divEl;
  }

  function createElements(type, content) {
    const result = document.createElement(type);

    if (typeof content == "string") {
      result.textContent = content;
    } else {
      result.appendChild(content);
    }

    return result;
  }
}
