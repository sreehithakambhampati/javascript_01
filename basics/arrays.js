const myArr = [0, 1, 2, 3, 4, 5]
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

// slice(): Non-destructive; extracts a portion of an array into a new array.
// splice(): Destructive; modifies the original array by adding, removing, or replacing elements.









