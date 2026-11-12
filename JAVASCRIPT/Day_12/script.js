/*

? HOF - higher ordered function
a function that takes another function as an argument

==> HOF( ()=>{} )

* arrayName.methodName((p1 , p2 , p3)=>{})

    p1 - element / item of an array 
    p2 - index value of an element 
    p3 - complete array on which method is applied 

*/

 let arr = [2, 3, 5, 6, 5, 45, 6];
 arr.map((p1, p2, p3) => {
   console.log("item is : ", p1);
   console.log("indexValue is : ", p2);
   console.log("completer Array is : ", p3);
 });
/*
// console.log(`element ${p1} is present in an array [${p3}] at index value ${p2}`)
//   console.log("============");

// });

// ?? #1. map((p1,p2,p3)=>{})
// * we use map to perform operations in each element of an array / based on condition.
// ! map always return 1 array
/*
let arr = [2, 3, 5, 6, 5, 45, 6];
let arr_double = [];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i] * 2;
//   arr_double.push(element);
// }

arr.forEach((ele, idx, arr) => {
  arr_double.push(ele * 2);
});

console.log(arr);
console.log(arr_double);

let double_arr = arr.map((ele) => ele * 2);
console.log(double_arr);

console.clear();

let cube_arr = arr.map((ele) => ele * ele * ele);
console.log(cube_arr);

console.clear();

// let even_arr = arr.map((ele) => {
//   if (ele % 2 == 0) {
//     return ele;
//   }
// });
// let even_arr = arr.map((ele) => {
//    return (ele % 2 == 0) ? ele : undefined
//    return (ele % 2 == 0) && ele
// });
// console.log(even_arr);

// ? filter( (p1,p2,p3)=>{} )
// it is used to filter the data based on the condition
// it will return an array of those elements that satisfied the condition else empty array []
let even_arr = arr.filter((ele) => ele % 2 == 0);
console.log(even_arr);

let odd_arr = arr.filter((ele) => ele % 2 != 0);
console.log(odd_arr);

// ? first even number present in an array [ arr ]

// ? #3. find((p1,p2,p3)=>{})
// it return the element based on the condition, whoever satisfied the condition first
let first_even = arr.find((ele) => ele % 2 == 0);
console.log(first_even);
let first_odd = arr.find((ele) => ele % 2 != 0);
console.log(first_odd);

console.clear();

// ? every((p1,p2,p3)=>{})
// * it will check all the elements are satisfying the condition yes or no - based on that it will return true or false.
// ! every method === && operator
let isAllEven = arr.every((ele) => ele % 2 == 0);
console.log(isAllEven);

// ? some((p1,p2,p3)=>{})
// * it will check any 1 elements is satisfying the condition yes or no - based on that it will return true or false.
// ! some method === || operator
let isAnyEven = arr.some((ele) => ele % 2 == 0);
console.log(isAnyEven);

/*
 map VS filter 

 filter VS find 

 some VS every 

 map VS ForEach 
 * map always return an array , forEach not 

 arrayName.map((ele , index ,array)=>{} )


* let arr = [12,4,2,4,6,77,3]
! arr.methodName((ele , index , array)=>{} )
?? -> double_arr
?? -> even_arr
?? -> odd_arr 
?? -> first_even
?? -> first_odd
?? -> isAllEven 
?? -> isAllOdd 

*/

  
