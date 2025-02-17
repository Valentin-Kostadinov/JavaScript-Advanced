function solve() {
  const textarea = document.querySelectorAll("textarea");
  const buttons = document.querySelectorAll("button");
  const body = document.querySelector("tbody");

  buttons[0].addEventListener("click", (e) => {
    const arr = JSON.parse(textarea[0].value);

    for (let el of arr) {
      const row = document.createElement("tr");

      const tdImage = document.createElement("td");
      const image = document.createElement("img");
      image.setAttribute("src", el.img);
      tdImage.appendChild(image);

      const tdName = document.createElement("td");
      const pName = document.createElement("p");
      pName.textContent = el.name;
      tdName.appendChild(pName);

      const tdPrice = document.createElement("td");
      const pPrice = document.createElement("p");
      pPrice.textContent = el.price;
      tdPrice.appendChild(pPrice);

      const tdDecor = document.createElement("td");
      const pDecor = document.createElement("p");
      pDecor.textContent = el.decFactor;
      tdDecor.appendChild(pDecor);

      const tdCheck = document.createElement("td");
      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      tdCheck.appendChild(input);

      row.appendChild(tdImage);
      row.appendChild(tdName);
      row.appendChild(tdPrice);
      row.appendChild(tdDecor);
      row.appendChild(tdCheck);

      body.appendChild(row);
    }
  });

  buttons[1].addEventListener("click", (e) => {
    const furniture = Array.from(
      body.querySelectorAll("input[type=checkbox]:checked")
    ).map((input) => input.parentNode.parentNode);

    const result = {
      bought: [],
      totalPrice: 0,
      decFactorSum: 0,
    };

    for (let row of furniture) {
      const cells = row.children;

      const name = cells[1].children[0].textContent;
      result.bought.push(name);

      const price = Number(cells[2].children[0].textContent);
      result.totalPrice += price;

      const factor = Number(cells[3].children[0].textContent);
      result.decFactorSum += factor;
    }

    textarea[1].value = `Bought furniture: ${result.bought.join(
      ", "
    )}\nTotal price: ${result.totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${result.decFactorSum / furniture.length}`;
  });
}
