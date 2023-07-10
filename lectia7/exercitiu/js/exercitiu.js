"use strict";

function checkElement(input) {
  let val = document.getElementById(input).value;
  if (val !== "") {
    if (!isNaN(val)) {
      document.getElementById(input).className = "";
      return val;
    } else {
      displayError(input);
      return false;
    }
  } else {
    return false;
  }
}

function displayError(input) {
  let inpEl = document.getElementById(input);
  let divEl = document.getElementById("result");
  inpEl.className = "numbers-error";
  divEl.innerText = "Trebuie sa introduceti numai numere";
  divEl.style.color = "red";
}

function displayResult() {
  let inp1 = checkElement("inp1");
  let inp2 = checkElement("inp2");
  let inp3 = checkElement("inp3");
  if (inp1 && inp2 && inp3) {
    let res = document.getElementById("result");
    res.style.color = "black";
    res.innerText = doTheMath(inp1, inp2, inp3);
    return res;
  } else {
    return false;
  }
}

function doTheMath(a, b, c) {
  return a - b * c;
}
