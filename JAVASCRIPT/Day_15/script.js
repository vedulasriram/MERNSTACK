
/*
1. create 1 array  & perform crud operation 

1. create
    > let arr = [1,2,3,4,5,6]
2. print entire array 
3. print each item one by one 
    >> by clg 
    >> by for 
    >> by forEach 
    >> by map 

4. update the values 
arrayName[0].id = 3

5. delete any value form an array by using splice 

* next question --
let arr2 = [ 
{id:1, name : "rahul"},
{id:2, name : "aman"},
{id:3, name : "rohan"},]
! print each object one by one
! print the id value of each object one by one 
* update the name value if id is 2 


*/


let arr = [10, 20, 30, 40, 50, 60]
console.log(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log("=============")

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}
console.clear()

arr.forEach(element => {
    console.log(element)
});
console.clear()

arr.map(el => console.log(el))

console.clear()

// ! update -  arrayName[index] = value 

console.log(arr)
arr[2] = 34
console.log(arr)

// ! delete 
arr.splice(0, 1)
console.log(arr)

console.clear()


let arr2 = [
    { id: 1, name: "rahul" },
    { id: 2, name: "aman" },
    { id: 3, name: "rohan" },]

console.log(arr2)

arr2.map(obj => console.log(obj))
console.clear()

arr2.map(obj => console.log(obj.id))
arr2.map(obj => console.log(obj.name))

console.clear()



// let updatedArr = arr2.map(obj => {
//     return obj.id == 2 ? { id: 2, name: "deepak" } : obj
// })
// console.log(updatedArr)


let updatedArr = arr2.map(obj => {
    return obj.id == 2 ? { ...obj, name: "deepak" } : obj
})
console.log(updatedArr)

console.log(
    arr2.filter(obj => obj.id >= 2)
)

console.clear()



let student_arr = [
    { id: 1, name: "rahul", marks: 10 },
    { id: 2, name: "aman", marks: 22 },
    { id: 3, name: "rohan", marks: 29 },
    { id: 4, name: "vishal", marks: 33 },
    { id: 5, name: "deepak", marks: 50 },
    { id: 6, name: "riya", marks: 60 },
]
//  filter the data that have less than 35
//  filter the data that have less than 25
//  filter the data that have less than 35 & greater than 25
//  now  update the marks of each student that have marks b/w the 25 to 34 => by adding the required marks to get the final marks 35.'



console.log(
    student_arr.filter(obj => obj.marks < 35)
)
console.log(
    student_arr.filter(obj => obj.marks > 25)
)

console.log(
    student_arr.filter(obj => obj.marks > 25 && obj.marks < 35)
)
console.clear()



console.log(
    student_arr.filter(obj => {
        if (obj.marks > 25 && obj.marks < 35) {
            let grace_marks = 35 - obj.marks
            obj.grace_marks = grace_marks
            obj.marks += grace_marks
        }
        return obj
    })
)

