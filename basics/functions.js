function calculate(num){
    return num;
}
console.log(calculate(100,200,300))

//FLAT opeartor in functions
function calculate1(...num){
    return num;
}
console.log(calculate1(100,200,300))

function calculate2(val1,val2,...num){
    return num;
}
console.log(calculate2(100,200,300,400))

