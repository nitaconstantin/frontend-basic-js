const divEl = document.querySelector("div");
const buttonEl = document.querySelector("button");

window.onload = function () {
  divEl.style.width = "50px";
  divEl.style.height = "50px";
  divEl.style.marginTop = "10px";
  changeBgGreen();
};

divEl.addEventListener("mouseenter", changeBgRed);
divEl.addEventListener("mouseleave", changeBgGreen);

function changeBgRed() {
  divEl.style.backgroundColor = "red";
}

function changeBgGreen() {
  divEl.style.backgroundColor = "green";
}

buttonEl.addEventListener("click", promptForName);
function promptForName() {
  let name = prompt("Adaugati alt nume");
  buttonEl.textContent = "Nume: " + name;
}
