// foreach
let subjects = ["as","fe","des","dw","dw2"]
// subjects.forEach(function (item){
//     console.log(item)
// })
// subjects.forEach((item)=>{
//     console.log(item)
// })


function printMe(item){
    console.log(item);
}
//  function can be given as callback directly ---only reference of the function should be given function shouldnt be called
subjects.forEach(printMe)






