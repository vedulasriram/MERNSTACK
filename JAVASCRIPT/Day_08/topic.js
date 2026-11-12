/*
?? Function in JS 
?? why  we need function 
?? syntax of function 
?? parameters 
?? arguments 
?? categories of function 
    => with parameters
    => without parameters

?? types of function
    > 1. function statement 
            > function declaration 

    > 2. function expression
         let age = function FindAge(){} 
         * a variable that holds the function as a value, it is known as FE

    > 3. First citizen function
        * a function that is used as a value in the FE.
        * RHS of the FE
        * EG - findAge

    > 4. named function
         * a function with name 
    
    > 5. anonymous function
        * a function without name 

    > 6. Arrow function
        * a short way to write it down the anonymous function 

    > 7. nested function
        * a function inside the another function 

    > 8. HOF 
        * a function that takes another function as an argument
          ? functionName(  findAge, sum , addition )

    > 9. CLF
        * a function that pass as an argument in HOF is known a CLF
        >> findAge, sum , addition


    > 10. IIFE
        *  this is a function that execute once and just after the declaration 
    
    > 11. pure function
    > 12. impure function
    > 13. first class function
    > 14. factory function 
    > 15. constructor function
    > 16. generator function
    
    > concepts : 
        1. currying 
        2. scopes ==> scope chaining 
        3. lexical scope 
        4. closure 
        -> {age : 28 }


        
    let age = 20 ;   // global scope 
       function outer(){
             lexical scope
          function inner(){
                 let newAge = age + 10 
            }
       }

            

*/
