let myHeroes = ["a","b"]
let heroPower = {
    a : "b",
    b : "c",
    getPower : function(){
        console.log(this.b)
    }
}
// If we add the method to the Object it will be accessible by all the objects.
//In js arrays,strings are considered as objects
Object.prototype.hey = function(){
    console.log("Hello");
}
myHeroes.hey()
heroPower.hey()

//Other example
let word = "abcdef      "
//Added to all strings
String.prototype.trueLength = function(){
    console.log(this)
    console.log(`${this}`)
    console.log(this.trim().length)
}
word.trueLength()
"sree     ".trueLength();












// To give one object variables access to others

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TASupport,TeachingSupport)


