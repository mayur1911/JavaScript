const students = ["mayur","shubham","sonu",34,35.53,true,"❤️"]
students[0] = "mayur yeole"
console.log(students)
console.log(students.length)

students.push("alexa")
console.log(students)

// array can store any datatype
students.push({name:"mayur"})
console.log(students)

/// ----------------------------
function print(n){
    console.log(n)
}
const numbers=[34,5,6,6,23,7,3,7]
numbers.forEach(print)

let newArr = numbers.map(print) // map create new array
console.log(newArr)

let ans = numbers.find(num => num === 6)
console.log(ans)
