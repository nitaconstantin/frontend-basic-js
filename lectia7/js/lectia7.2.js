let x = addNumbers(5, -3);
console.log("x = ", x);

function addNumbers(a, b) {
  return a + b;
}

let myFunc = function (a, b) {
  return a * b;
};

let y = myFunc(3, -7);
console.log(y);

let myFunc2 = (a, b) => {
  return a - b;
};

let z = myFunc2(25, 13);
console.log(z);
(function () {
  //   console.log("Ma apelez singura!");
  let div1 = document.getElementById("mydiv1");
  div1.style.backgroundColor = "red";
})();

let myFunc3 = (a, b = 5) => {
  console.log("a= ", a);
  console.log("b = ", b);
  //   if (b === undefined) {
  //     b = 5;
  //   }
  return a - b;
};

let z2 = myFunc3(20, 18);
let z3 = myFunc3(27);
console.log(z2, z3);
