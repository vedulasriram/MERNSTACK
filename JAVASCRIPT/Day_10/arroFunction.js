let greet = () => console.log("hello everyone");
greet();

// !rules of arrow function

//* Rule : 01 - if u have only 1 statement in the function body  then no need to use {}

let sum = (a, b) => {
  console.log(a + b);
};
sum(20, 30);

let sum2 = (a, b) => console.log(a + b);
sum2(20, 30);

//* Rule : 02 - if u have only 1 parameter in the () then no need to use ()
let square = (num) => console.log(num * num);
square(4);
// let square2 = num => console.log(num * num);
// square2(4);

console.clear();

// * Rule:03 -if u have only 1 statement that is the return statement , in the arrow function if and only if we are not using {}
// ? implicit return: automatic return
let multiply = (a, b) => a * b;
console.log(multiply(20, 4));

// *Rule 04 - if u r using {} ,and  u want to return anything then , u need to use the return keyword as an explicit return.
let div = (a, b) => {
  return a / b;
};
console.log(div(20, 4));

// * Rule 05 - if u have more than 1 statement in the function body then u need to enclose all inside the {}
let greetings = () => {
  console.log("hello world ");
  console.log("how are you all ");
};
