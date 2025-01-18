// Primitive -- stack 
// Non primitive -- heap

// Stack memory involves copying values, so changes to one variable do not affect another.
// Heap memory involves references, so changes to an object via one 
// variable are reflected in other variables referencing the same object.

let userName = "hiteshchowdary"
let anotherName = userName
console.log(userName)
console.log(anotherName)
anotherName = "sree"
console.log(userName)
console.log(anotherName)

let userOne = {
    email : "user@gmail.com",
    name:"user1"
}
let userTwo = userOne

console.log(userOne.email)
console.log(userTwo.email)
userTwo.email = "me@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)


