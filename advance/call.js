// Function to set the username
function SetUserName(username){
    this.username = username;
}

// Constructor function to set user details
function SetUser(username, email, number)
{
    // Calling SetUserName function but without `this`, so it does NOT attach `username` to the instance
    SetUserName(username);
    
    // Setting email and number on `this`
    this.email = email;
    this.number = number;
}

// Creating an instance of SetUser
const user1 = new SetUser("abc", "abc@gmail.com", 654);
console.log(user1);
// Output: SetUser { email: 'abc@gmail.com', number: 654 }
// Explanation: The `username` property is missing because `SetUserName(username);` was called 
// without binding `this`, so it only assigns `username` to the global object (or `undefined` in strict mode).


// Function to set the username with proper binding
function SetUserName1(username){
    this.username = username;
}

// Constructor function to set user details
function SetUser1(username, email, number)
{
    // Using `call` to invoke SetUserName1 in the context of `this`, so `username` is assigned correctly
    SetUserName1.call(this, username);

    // Setting email and number on `this`
    this.email = email;
    this.number = number;
}

// Creating an instance of SetUser1
const user2 = new SetUser1("abc", "abc@gmail.com", 654);
console.log(user2);
// Output: SetUser1 { username: 'abc', email: 'abc@gmail.com', number: 654 }
// Explanation: `SetUserName1.call(this, username);` ensures that `this` inside `SetUserName1` 
// refers to the instance of `SetUser1`, allowing `username` to be correctly assigned.
