const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise1")
        resolve()
    },1000)
    
});
promise1.then(function(){
      console.log("Promise1 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
// promiseThree.then(function(user){
//     console.log(user)
// })
promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Chai",pass:"123"})
    },1000)
})
promiseFour.then((user)=> {
    console.log(user)
    return user.username
}).then((username)=>
{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(function(){
    console.log("It is resolved or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000) 

});
async function consumePromiseFive(){
    try{
        const response = await promiseFive 
        console.log(response)
    }
    catch(error){
         console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
