function User(username,loginCount)
{
    this.username = username;
    this.loginCount = loginCount;
    return this;
}
let UserOne = User("hitesh",12)
// console.log(UserOne)
// Output:-
// username: 'hitesh',
// loginCount: 12
let UserTwo = User("sreehitha",13)
console.log(UserOne)
// Output:-
// username: 'sreehitha',
// loginCount: 13
// Here we updated UserTwo but UserOne also got updated to avoid this we use new keyword which provides new reference for every function


// Using new keyword:-
function User1(username,loginCount)
{
    this.username = username;
    this.loginCount = loginCount;
    return this;
}
let UserOne1 = new User1("hitesh",12)

let UserTwo1 = new User1("sreehitha",13)
console.log(UserOne1);
console.log(UserTwo1);
// Output:-
// User1 { username: 'hitesh', loginCount: 12 }
// User1 { username: 'sreehitha', loginCount: 13 }


