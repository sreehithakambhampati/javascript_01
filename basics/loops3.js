// //map and reduce
// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )
// console.log(values);
//forEach loop doesnt return value.


// In that case we will use map and reduce
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// const newNums = myNums.filter( (num) => 
//     num > 4
//  )
//  const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);

  //MAP

  const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const newNums = myNums.map((num) =>{
    return num+10
  })
  console.log(newNums)

  const newNums2 = myNums.map((num) => num*10).map((num) => num+1).filter((num) => num>=50)
  console.log(newNums2)

  //REDUCE

  const nums = [1,2,3,4,5,6,7]
  let total = nums.reduce(function(acc,currVal) {
    console.log(`acc val is ${acc} and currVal is ${currVal}`)
    return acc+currVal 
  },0)
  console.log(total);
//   Initially acc value is 0 after evry iteration acc value will be updated to acc+currVal


const myTotal = nums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);




