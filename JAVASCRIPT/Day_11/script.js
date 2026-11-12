/*
? splice  - 

1. syntax - 
arr.splice(SI , DeleteCount, elements u want to add  )
arr.splice( SI, DeleteCount , optional )

*/

let arr = [1, 2, 3, 4, 5];

//console.log(arr);
//arr.splice(0, 1);
//console.log(arr);



//let SI = arr.length - 1;
//arr.splice(SI, 1);
//console.log(arr);

//arr.splice(1, 1);
//console.log(arr);

//arr.splice(0, 0, "first");
//console.log(arr);

//arr.splice(arr.length, 0, "last");
//console.log(arr);

//arr.splice(2, 0, "middle");
//console.log(arr);
// console.clear();

// * replace last item
//let EI = arr.length - 1;
//arr.splice(EI, 1, 5);
//console.log(arr);

// * replace middle item
//arr.splice(2, 1, 3);
//console.log(arr);

// * replace 1st item
//arr.splice(0, 1, 1);
//console.log(arr);

/*

? splice(SI , deleteCount , items.....)

* insertion of the element at the 0th index
* insertion of the element at the middle index
* insertion of the element at the last index

* deletion of the element at the 0th index
* deletion of the element at the middle index
* deletion of the element at the last index

* replace the element present at the 0th index
* replace the element present at the middle index
* replace the element present at the last index

! insert , remove , replace any element form any index value
*/

let arr_01 = ["HTML", "CSS", "JS", "DOM", "REACT JS", "NODE JS", "EXPRESS JS","MONGO DB"]
/*
 arrayName.methodName()
    A. indexOf("item")     
    B. lastIndexOf("item")
    C. includes("item")  
    D. slice(SI, EI )  
    E. reverse()

    F. join("condition")    

*/


//arr_01.join("JAVA");
//console.log(arr_01)


/*

console.clear();

let arr_01 = [
  "HTML",
  "CSS",
  "JS",
  "DOM",
  "REACT JS",
  "NODE JS",
  "EXPRESS JS",
  "MONGO DB",
];

console.log(arr_01.indexOf("html"));
console.log(arr_01.indexOf("HTML"));

console.log(arr_01.lastIndexOf("html"));
console.log(arr_01.lastIndexOf("HTML"));

console.log(arr_01.includes("html"));
console.log(arr_01.includes("HTML"));

console.clear();
console.log(arr_01);
let frontend = arr_01.slice(0, 5);
console.log(frontend);

let backend = arr_01.slice(5);
console.log(backend);

let array = [10, 20, 40, 24, 43, 54, 23, 6, 32, 456, 64, 32];
console.log(array.slice(3, 7));

console.log(array.slice(0, array.length));
console.log(array.slice(0, 4));

// if & only if SI is 0 , the EI == number of items
console.log(array.slice(0, 9));

console.clear();

console.log(arr_01);
let reverseArray = arr_01.reverse();
console.log(reverseArray);
console.log(arr_01);
console.clear();

// ?  reverse the string

let str = "this is the demo string";

let str_arr = str.split(" ");
console.log(str_arr);

let str_arr_reverse = str_arr.reverse();
console.log(str_arr_reverse);

let reverse_str = str_arr_reverse.join(" ");
console.log(reverse_str);

// !!  Method chaining !! 
console.log(str.split(" ").reverse().join(" "));
*/