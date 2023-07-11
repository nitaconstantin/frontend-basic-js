"use strict";

function checkElement(input) {
  let val = document.getElementById(input).value;

  if (val !== "") {
    if (isNaN(val)) {
      // error code
      showError(input);
      return false;
    } else {
      document.getElementById(input).className = "";
      return val;
    }
  } else {
    return false;
  }
}

function showError(input) {
  let inpEl = document.getElementById(input);
  let divEl = document.getElementById("result");

  divEl.style.color = "red";
  divEl.innerText = "Introduceti numai numere";
  inpEl.className = "numbers_error";
}

function displayResult() {
  let inp1 = checkElement("inp1");
  let inp2 = checkElement("inp2");
  let inp3 = checkElement("inp3");

  if (inp1 && inp2 && inp3) {
    let divEl = document.getElementById("result");
    divEl.style.color = "black";
    divEl.innerText = doTheMath(inp1, inp2, inp3);
  }
}

function doTheMath(a, b, c) {
  return a - b * c;
}
