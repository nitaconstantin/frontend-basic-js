"use strict";

function checkElement(input) {
  let val = document.getElementById(input).value;
  if (val !== "") {
    if (isNaN(val)) {
      displayError(input);
      return false;
    } else {
      document.getElementById(input).className = "";
      return val;
    }
  } else {
    return false;
  }
}

function displayError(input) {
  let divEl = document.getElementById("result");
  let inputEl = document.getElementById(input);

  divEl.style.color = "red";
  divEl.innerText = "Trebuie sa introduceti numai numere!";
  inputEl.className = "numbers_error";
}

function displayResult() {
  let inp1 = checkElement("inp1");
  let inp2 = checkElement("inp2");
  let inp3 = checkElement("inp3");

  if (inp1 && inp2 && inp3) {
    let divEl = document.getElementById("result");
    divEl.style.color = "black";
    divEl.innerText = doTheMath(inp1, inp2, inp3);
  } else {
    return false;
  }
}

function doTheMath(a, b, c) {
  return a - b * c;
}
