// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// console.log(map);
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
// TypeError: myObject is not iterable

//Use this
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// for (const key in map) {
//     console.log(key);
// }
// //No output


// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log(key);
// }
// for (const key of programming) {
//     console.log(key);
// }

