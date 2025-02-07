class User{
    constructor(username,email)
    {
        this.username = username
        this.email = email
    }
    set username(value)
    {
        this._username = value
    }
    get username()
    {
        return this._username.toUpperCase();
    }
    
}
const hitesh = new User("hitesh","sdhs@gfsh.com")
console.log(hitesh.username)