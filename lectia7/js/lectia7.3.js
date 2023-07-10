let myVar1 = 5;

function testFunc1() {
  myVar1 = 7;
  console.log("Interior myVar1 = ", myVar1);
  let myVar2 = 10;
  console.log("Interior myVar2 = ", myVar2);
}

testFunc1();
console.log("myVar1 = ", myVar1);
// console.log("myVar2 = ", myVar2);

// let counter = 0;

// function incrementVar() {
//   let counter = 0;
//   //   counter++;
//   function add() {
//     counter++;
//     return counter;
//   }
//   add();
// }

let add = (function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

function modifyVar() {
  counter = 5;
  return counter;
}
function displayVar() {
  document.getElementById("myDiv2").innerText = add();
}

// closure

function testFunc2(x) {
  console.log("Interior testFunc: x = ", x);
  return function (y) {
    console.log("Interior testFunc: y = ", y);
    return x * y;
  };
}

let myVar3 = testFunc2(3);
console.log("rezultatul functiei de test 2: ", myVar3(5));
