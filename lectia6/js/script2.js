"use strict";
console.log("descriere...");
// console.error("mesaj de eroare");
// console.info("mesaj informativ");

// comentariu pe o singura linie

/*
Comentariu
pe 
mai 
multe
linii
*/

// var - cea mai slaba declaratie a unei variabile
// let - variabila careia ii putem modifica valoarea
// const - variabila careia nu ii putem modifica valoarea si trebuie initializata cu tot cu valoare

// let x = { name: "Andrei", age: 27 };
// x = 5;
// let x = function () {};
// let x = null;
// console.log("variabila x are valoarea: ", x);

// let const noua modalitate de declarare a variabilelor

// Tipuri de date primitive : numbers, strings, undefined, boolean, bigInt, symbol
// Tipuri de date structurale: objects, functions
// Tipul de date null
// console.log("variabila x este de tipul: ", typeof x);

console.log("<<<<Operatori Matematici>>>>");
// console.log(typeof z);
/* 
Operatori matematici:
*/

// let x = 10;
// let y = 7;
// let z = x % y;
// let x = 7;
// let y = 10;
// x++;
// x += 5; // x + 5
// x -= 5; // x - 5
// x -= y;
// let x = 5 + 3 * (2 + 7 - 8 / 2); // 14 // 20

// let x = "text";
// let y = "descriptiv";
// let z = x + " " + y;
// x += " un alt text";
// let x = 5;
// x += 3;
// x += "7";
// x += 1;

// Operatori de comparatie:
//
let x = 5;
let y = 8;
let z = x === y || x > 3; // false
// Operatori Logici:
// 0 && 1 = 0
// 0 && 0 = 0
// 1 && 0 = 0
// 1 && 1 = 1

// 0 || 0 = 0
// 0 || 1 = 1
// 1 || 1 = 1
// 1 || 0 = 1

// intotdeauna va intoarce true!!!!
// if (x === y) {
// }

// console.log("y transformat in numar ", parseInt(y));
// console.log("testam NaN: ", isNaN(y));
console.log("z = ", z);

// function testAge() {
//   let age = prompt("introduceti varsta:");
//   if (age >= 18) {
//     document.getElementById("mydiv1").innerText =
//       "Aveti varsta legala pentru a conduce";
//   } else {
//     document.getElementById("mydiv1").innerText =
//       "Nu aveti varsta legala pentru a conduce";
//   }
// }
