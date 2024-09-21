// variable

var age =23;

console.log(age)

age = "mayur" // can change datatype

console.log(age)

// var has global scope
// let and const has local scope

if(true){
    var amt =345;
}
console.log(amt)

///////
if(true){
    let a = 35;
    console.log(a)
}
//console.log(a) // a is not accesible here


////// const
// scope > local, cannot change value
const b =34;
b = "asdf"; // error TypeError: Assignment to constant variable.
console.log(b)

// var -> global, reassign, access anywhere
// let -> local, reassgn, block level access
// const -> local, cannot reassign