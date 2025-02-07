const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

}

// for ( let [key,value] of chai) {
//       console.log(`${key} : ${value}`)   
// }
// Output:-chai is not iterable
for(let [key,value] of Object.entries(chai))
{
    console.log(`${key} : ${value}`)
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    //TO STOP ITERATION OF THE OBJECT
    enumerable:false
})
for(let [key,value] of Object.entries(chai))
{
        console.log(`${key} : ${value}`)
} 
