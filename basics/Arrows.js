// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }
// user.welcomeMessage()



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// OUTPUT:- undefined----this works only in the objects and not in functions



// ---------------ARROW FUNCTIONS -------------------------

const obj = {
    value: 10,
    arrowFunc: () => {
        console.log(this.value); // `this` refers to the global scope, not `obj`
    } 
}; 
obj.arrowFunc(); // Output: undefined

const obj1 = {
    value: 10,
    arrowFunc1: function () {
        const arrow = () => {
            console.log(this.value); // `this` is lexically bound to the surrounding function
        };
        arrow();
    }
};
obj1.arrowFunc1(); // Output: 10




//----IMPLICIT RETURN IN ARROW FUNCTIONS------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
