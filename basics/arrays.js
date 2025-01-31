const myArr = [0, 1, 2, 3, 4, 5]
const myArr1 = [23,34,52]
const myArr2 = [102,103,104]
// const myHeors = ["shaktiman", "naagraj"]
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// // Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// // Removes the first element from the array
// myArr.shift()
// // Adds element to the beginning of the array
// myArr.unshift(9)

// //Converts it to string
//  const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr)


console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
//original arrays is not changed
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
//original array changes
console.log("C ", myArr);
console.log(myn2);

slice(): Non-destructive; extracts a portion of an array into a new array.
splice(): Destructive; modifies the original array by adding, removing, or replacing elements.





// myArr.push(myArr1)
// console.log(myArr)

// const newArr = myArr2.concat(myArr1,myArr)
// console.log(newArr)

// const newArr1 = [...myArr,...myArr1,...myArr2]
// console.log(newArr1)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.of("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


console.log(Array.from("Hitesh"))
console.log(Array.of("Hitesh"))
// Use Array.of() when you need to create an array from specific values.
// Use Array.from() when you need to convert an iterable or array-like object into an array, often with a transformation.













