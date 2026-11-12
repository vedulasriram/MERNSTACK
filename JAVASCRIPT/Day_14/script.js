let emp = {
  emp_id: 717114,
  emp_name: "rohan",
  emp_designation: "SDE",
};

console.log(emp);
console.log(emp.emp_id);
console.log(emp.emp_name);
console.log(emp.emp_designation);
console.clear();
// ! Object.methodName(objectName)

let keyArray = Object.keys(emp);
console.log(keyArray);

for (let i = 0; i < keyArray.length; i++) {
  let keyName = keyArray[i];
  //   console.log(keyName);
  console.log(emp[keyName]);
}
console.clear();

let valuesArray = Object.values(emp);
console.log(valuesArray);

for (let i = 0; i < valuesArray.length; i++) {
  const value = valuesArray[i];
  console.log(value);
}

console.clear();

// ! for in loop = it return the key from the object

for (let key in emp) {
  console.log(emp[key]);
}

/*
==>> object --> array 

let emp  = {
emp_id : 717114 , 
emp_name : "rohan"
}

let emp_arr = [  [keyName , value]   , [keyName , "value"]      ]
let emp_arr = [  [emp_id , 717114]   , [emp_name , "rohan"]      ]


*/

console.clear();
// ! object to array
let emp_nestedArray = Object.entries(emp);
console.log(emp_nestedArray);

console.clear();
// ! array to object
// each element of an array should be an array itself
// each element have only 2 items in it , key & value
let emp2 = Object.fromEntries(emp_nestedArray);
console.log(emp2);

/*
!! -----------    Object.methodName(objectName) ---------- !!

Object.keys(emp)    ==> array of keyNames of an object emp 
Object.values(emp)  ==> array of values of an object emp 
Object.entries(emp) ==> nested array of key, value of an object emp 

Object.fromEntries(nestedArray) ==> object 

? for..in loop :

for(let  key in emp ){
clg(key)
clg(emp[key])
clg(`[${key}, ${user[key]}]`)
}

>>>>>>> key = emp_name

*/

let user = {
  user_id: 717114,
  user_name: "rohan",
  user_gender: "male",
};
/*

1. pint object - 

2. print values - dot notation & square notation

3. create keysArr , valuesArray , entriesArray 

4. then from the entriesArray create an object & store it into new variable 

5. by using the for in loop 
    >> pint keyName
    >> pint value
    >> pint entries 

for(let  key in emp ){
        clg(key)
        clg(emp[key])
        clg(`[${key}, ${user[key]}]`)
}

*/
