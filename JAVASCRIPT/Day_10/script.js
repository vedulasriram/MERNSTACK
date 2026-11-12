// !create
let arr = [1, 2, 3, 4, 5, 6];

// ! read
console.log(arr);
// * arrayName[indexValue]

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

console.log("===========");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.clear();

//  ? UPDATE -
// *  arrayName[indexValue] = new value
console.log(arr);
arr[0] = "first element";
console.log(arr);

// ? delete -
// *  arrayName[indexValue] = undefined
console.log(arr);
arr[1] = undefined;
console.log(arr);

console.clear();

/*
shift()
unshift() - 
push() - insert at the end 
pop()  - remove from the last index 
*/
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
let deletedElement = arr1.shift();
console.log(arr1);

 console.log(deletedElement);

// ? shift() -remove the first item ,0th index item
// * return of shift() - deletedElement

// ?pop()  -delete the last item of an array
arr1.pop();
console.log(arr1);
// * return of pop() - deletedElement


// ? unshift() -add the item in the 0th index.
arr1.unshift("first item");
console.log(arr1);

//* return of unshift()- length of the updated array


// ? push() -
arr1.push("last item");
console.log(arr1);

    
console.log(arr1[0])// first item
console.log(arr1[1]) //2
console.log(arr1[2]) //3
console.log(arr1[3]) //4
console.log(arr1[4]) //last item 