window.addEventListener("load", (event) => {
  // coookie notification
  const cookieExists = document.cookie
    .split("; ")
    .find((row) => row.startsWith("maxValue="));
  if (cookieExists) {
    alert("Після натискання кнопки ОК cookie буде видалено");
    document.cookie = "maxValue=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }

  // set font weight from localstorage
  const block6header = document.getElementById("block-6-header");
  block6header.style.fontWeight = localStorage.getItem("font-weight");

  // set selected option from localstorage
  updateMenu();

  // swap block 4 and block 5
  const block4 = document.getElementById("block-4");
  const block5 = document.getElementById("block-5");
  const parent = block4.parentElement;
  parent.insertBefore(block5, block4);

  // calculate area of a triangle
  const a = 4;
  const b = 5;
  const c = 6;
  const p = (a + b + c) / 2;

  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  const block3 = document.getElementById("block-3");
  block3.innerHTML = "Area of the triangle is: " + area.toFixed(3);

  // calculate max value and its count
  let form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("form-input").value;
    const splittedValues = input.split(",");
    const maxValue = Math.max(...splittedValues);
    const count = splittedValues.filter((value) => value == maxValue).length;
    alert("Max value is: " + maxValue + " and it occurs " + count + " times");

    document.cookie = "maxValue=" + maxValue;
  });

  document.addEventListener("scroll", (event) => {
    const scrollPosition = window.scrollY;
    block6header.style.fontWeight = scrollPosition * 25;
    block6header.innerHTML = "Font weight: " + block6header.style.fontWeight;
    localStorage.setItem("font-weight", block6header.style.fontWeight);
  });

  const selectBtn = document.getElementById("select-btn");
  selectBtn.addEventListener("click", (event) => {
    const select = document.getElementById("select");
    const selectedOption = select.options[select.selectedIndex];
    localStorage.setItem("selected-option", selectedOption.value);
    updateMenu();
  });
});

function updateMenu() {
  const selectedOption = localStorage.getItem("selected-option");
  const menu = document.getElementById("menu");
  switch (selectedOption) {
    case "section-1":
      menu.innerHTML = `<li><a href="#section-1">➡️ 1. About cats</a></li>`;
      break;
    case "section-2":
      menu.innerHTML = `<li><a href="#section-2">➡️ 2. About cats</a></li>`;
      break;
    case "section-3":
      menu.innerHTML = `<li><a href="#section-3">➡️ 3. About cats</a></li>`;
      break;
    case "section-4":
      menu.innerHTML = `<li><a href="#section-4">➡️ 4. About cats</a></li>`;
      break;
    case "section-5":
      menu.innerHTML = `<li><a href="#section-5">➡️ 5. About cats</a></li>`;
      break;
    default:
      menu.innerHTML = `
                <li><a href="#section-1">➡️ 1. About cats</a></li>
                <li><a href="#section-2">➡️ 2. About cats</a></li>
                <li><a href="#section-3">➡️ 3. About cats</a></li>
                <li><a href="#section-4">➡️ 4. About cats</a></li>
                <li><a href="#section-5">➡️ 5. About cats</a></li>
        `;
      break;
  }
}
