/*
?  array : used to store 1 or more than 1 data

? object : used to store details about the single data or entity.

let s1 = {
    s_name : "rahul",
    s_id : 1
}
let s2 = {}
let s3 = {}
let s4 = {}

let students = [s1, s2 , s3 ,s4]



?? What is Object - 
* it is a non-primitive DT used to store the details about the single entity.
>> in the form of key value pairs,  
>> all key value are separated by the comma and 
>> enclosed inside the {}

eg : 
let emp, student, user, laptop

! syntax - 
let objectName = {
        key1 : value ,     
        key2 : value ,     
        key3 : value ,     
        key4 : value ,     
    }


?? why we need objects - 
In objects data stores with identifier that we can use to access the data easily 

* keys are the identifiers + extra stuff - 
>> keys can be a number 
>> we can create 2 words as  a key 
    like - user name  ❌ 
    like - "user name"  ✅ 

! keys are store in the form of strings - 
DT / typeof - of keys are string

values = any DT - primitive as well as non-primitive 

key & value separated by colon - key : value 
key value pairs separated by - comma 
    like : 
            key : value ,
            key : value ,
            key : value ,

! CRUD operation 

*/

// ? create -

let emp = {
  emp_id: "717114",
  emp_name: "rohan",
  emp_designation: "SDE",
  emp_isMarried: false,
  emp_YOE: 2,
  emp_salary: null,
  emp_nextCompany: undefined,
  emp_skills: ["frontend development", "cyber shell", "Devops"],
  emp_address: {
    emp_temp_add: { city: "noida" },
    emp_para_add: { city: "Agra" },
  },

  "emp hobbies ": ["h1", "h2", "h3"],
  7: "lucky number",
};

// ? read -
console.log(emp);

// ! notations = dot & square
// ? syntax
// * dot notation - objectName.keyName

console.log(emp.emp_id);
console.log(emp.emp_YOE);
console.log(emp.emp_name);
console.log(emp.emp_nextCompany);
console.log(emp.emp_salary);
console.log(emp.emp_skills);
console.log(emp.emp_skills[1]);
console.log(emp.emp_isMarried);
console.log(emp.emp_designation);
console.clear();

console.log(emp.emp_address);

// ? nested object -
// * objectName.keyName.nestedKeyName.nestedKeyName......

console.log(emp.emp_address.emp_temp_add);
console.log(emp.emp_address.emp_temp_add.city);

console.log(emp.emp_address.emp_para_add);
console.log(emp.emp_address.emp_para_add.city);

// ? square notation =

// *  objectName["keyName"]

console.log(emp["emp_id"]);
console.clear();

// ? access the value of the key - 2 & "user name "

// console.log(emp.7)
// console.log(emp.user name )

console.log(emp["7"]);
console.log(emp[7]);

console.log(emp["emp hobbies "]);
console.clear();

// ! update  -
// objectName.keyName = "new value "

console.log(emp.emp_id);
emp.emp_id = "123456789";
console.log(emp.emp_id);

// ! delete -
// *     delete  objectName.keyname

console.log(emp.emp_isMarried);
delete emp.emp_isMarried;
console.log(emp.emp_isMarried);
console.clear();

let user = {
  user_id: 717114,
  user_name: "rohan",
  7: "number",
  user_address: {
    user_temp_add: { city: "noida" },
    user_para_add: { city: "Agra" },
  },
  "user DOB": "29 feb 2000",
};
console.log(user.user_id);
console.log(user.user_name);
console.log(user.user_address);
console.log(user.user_address.user_temp_add);
console.log(user.user_address.user_temp_add.city);
console.log(user.user_address.user_para_add);
console.log(user.user_address.user_para_add.city);

// ! square notation
console.log(user[7])
console.log(user["user DOB"])

// ! update - 
user.user_id = '1234'

// ! delete 
delete user.user_id