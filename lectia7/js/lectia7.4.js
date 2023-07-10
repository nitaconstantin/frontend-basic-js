"use strict";
let myNewVariableOne = "string",
  myNewVariableTwo = 0,
  myNewVariableThree = [],
  myNewVariableFour = {};

const myNewVariableFive = 12;
let v1 = 3;

let newVariableOne = new String("Alina");
let newVariableTwo = "Alina";
console.log(
  ">>>>",
  newVariableTwo,
  newVariableOne,
  newVariableOne === newVariableTwo
);

console.log(">>>>", typeof newVariableOne, typeof newVariableTwo);
// delete v1;
//let v1;

// let newVariableFour = 5 + 7;
// let newVariableFour = "5" + 7;
// let newVariableFour = 5 + "7";
// let newVariableFour = "5" - 7; // -2
// let newVariableFour = 5 - "7";
let newVariableFour = "a" - 7; // NaN
console.log("newVariableFour = ", newVariableFour);

function func1() {
  // function in strict mode
  //   "use strict";
  let v2 = 5;
  function insideFunc1() {
    console.log("Inauntrul functiei");
    let v3 = 7;
  }
  insideFunc1();
  console.log("descriere test");
}

func1();
// delete func1;

let obj1 = {
  name: "Marius",
  age: 32,
};

function func2(a, b) {
  return a - b;
}

// nu putem adauga 2 parametrii cu acelasi nume in strict mode
// function func2(a, a, b) {
//     return a - a - b;
//   }

console.log(func2(5, 7, 3));

let obj2 = {};
Object.defineProperty(obj2, "property1", { value: 3, writable: false });
console.log("prop1:", obj2.property1);
// obj2.property1 = 5;

// delete Object.prototype;
// let v3 = 010;
// let v4 = "\010";

// lista nume variabile ce nu pot fi folosite in strict mode:
// public, protected, static, private, let, eval, arguments, interface, yield, etc.

// let eval = 5;
// let arguments = 5;

let myLocalVariable1;
// function addThreeNumbers(a, b, c) {}
let addThreeNumbers = (a, b, c) => {
  return a + b + c;
};

// if (a === b) {
// } else {
// }

let numbersArray = [5, 7, 9];

let person = {
  name: "Adrian",
  age: 25,
  height: 178,
  nationality: "RO",
};

function newFuncToReadDataFromServer(
  myParameter1,
  secondParameterRegardingInput,
  thirdParameterRegardingOutput
) {
  return true;
}
