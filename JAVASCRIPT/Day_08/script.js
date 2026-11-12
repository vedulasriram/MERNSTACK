/*

? what is Functions 
* it is a block of code used to perform a specific task, when we call the function 

todo : it is a way to execute the block of code as per the user requirements 
        >> with user input 
        >> without user input 
        >> with same user inputs
        >> with different user inputs

* create once and use multiple times 
* create anywhere & use anywhere in the js file 
==> because of hoisting, [ ]

? syntax of function 

* function keyword followed by the function name after that we have one (), inside the () we have parameters , after the parameters we have 1 {}, inside the {} we are going to write it down body of the function , block of code  etc... 

function functionName(parameter_01 , parameter_02){
    body of the function 
}

* function :  keyword 
* functionName : identifier, used to identify the function 
* parameters : these are the variables that we pass inside the () only without using let , var & const while doing function declaration
? use of parameters : it holds the user inputs that user pass while calling the function 

* arguments : input values that user pass while calling the function

? how to call the functions 
* functionName(argument_01, argument_02)

*/

// function greet() {
//   console.log("hello everyone ");
// }
// greet();

function sum(a, b) {
  console.log(a + b);
}
sum(2, 4);

// parameters : a & b
// arguments  : 2 & 4


//? types of functions 
