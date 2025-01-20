(function addOne() {
    console.log("DB CONNECTED")
})(); 

// ; is needed to terminate the function

 ((name)=>{
    console.log(`Name is ${name}`)
 })('ram');

// An IIFE(Immediately Invoked Function Expression) helps to prevent global pollution by encapsulating variables and functions within its local scope, avoiding unintentional exposure to the global environment.
// (function () {
//     var localVariable = "I am local!";
//     console.log(localVariable);
// })();
// console.log(localVariable); // ReferenceError: localVariable is not defined