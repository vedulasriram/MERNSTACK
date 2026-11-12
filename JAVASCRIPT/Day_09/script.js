// ? function statement

// function sum(n1, n2) {
//   console.log(n1 + n2);
// }

// sum(10, 20);

// ? function expression + named function
let add = function addition(n1, n2) {
  console.log(n1 + n2);
};

// addition(10,20)
add(10, 30);

// ? function expression + anonymous function
let add2 = function (n1, n2) {
  console.log(n1 + n2);
};

add2(10, 30);

// ? named function
// function sub(n1, n2) {
//   console.log(n1 - n2);
// }

// ? anonymous function
// function (n1, n2) {
//   console.log(n1 - n2);
// };

/*
 1. function statement : division of 2 
 2. function expression + named function
 3. function expression + anonymous function
 */

// 3. function expression + anonymous function
let multiplication = function (n1, n2) {
  console.log(n1 * n2);
};
console.clear();

// ? what is arrow function
// * it is a short hand way to write it down the anonymous function ,
// todo : remove the function keyword & just after the () add one fat arrow symbol  like , =>
// * syntax - ()=>{}

// 4. function expression + arrow function
let multiplication2 = (n1, n2) => {
  console.log(n1 * n2);
};
multiplication2(10, 2);

console.clear();

// create one function statement - print hello function [  greet function ]
function greet() {
  console.log("hello everyone");
}
/*

=> convert this greet function into 

1. function expression with named function
2. function expression with anonymous function
3. function expression with arrow function
*/

console.clear();

// ? nested function : a function inside the another function
// function outer() {
//   console.log("i am outer function");
//   inner();

//   function inner() {
//     console.log("i am inner function ");
//   }
// }
// outer(); // i am outer function
// inner(); //! error : inner is not defined

// ! ---------------------------
// function outer() {
//   console.log("i am outer function");
//   return function inner() {
//     console.log("i am inner function ");
//     return () => console.log("nested function ");
//   };
// }

// let result = outer();
// result()

// outer()()();

//  ? HOF : a higher order function
// * a function that takes another function as an argument

function calculator(n1, operatorFun, n2) {
  console.log("n1 = ", n1);
  console.log("operatorFun = ", operatorFun);
  console.log("n2 = ", n2);

  operatorFun(n1, n2);
}

let sum = (a, b) => console.log(a + b);
let sub = (a, b) => console.log(a - b);

calculator(80, sum, 30);
// calculator(80, sub, 30);

// ? hof - calculator
// ? clf - sum, sub

console.clear();

// IIFE
(function () {
  console.log("username");
})();

(function () {
  console.log("username");
})();

// ES5 
