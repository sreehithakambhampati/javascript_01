class User
{
    constructor(username)
    {
        this.username = username
    }
    logMe()
    {
        console.log(`${this.username} is logged`)
    }
}
class Teacher extends User{
    constructor(username,email,password)
    {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse()
    {
        console.log(`New course is added by ${this.username}`)
    }
}
const chai = new User("chai")
const Tea = new Teacher("tea","tea@gmail.com","abc")
// chai.addCourse()
// Output:-
// chai.addCourse()
// TypeError: chai.addCourse is not a function
chai.logMe()
// Output:-
// chai is logged
Tea.logMe();
// Output:-
// tea is logged
console.log(chai instanceof User);
console.log(Tea instanceof User)





