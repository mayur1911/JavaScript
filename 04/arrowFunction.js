const sayHello = () => {
    // this is arrow function
    console.log('hello from arrow function')
}

sayHello()

const add = (a,b) => {
    return a+b;
}

let result = add(33,4)
console.log('result is '+result)

const multiply = (...numbers) => { // used when unlimited argumets are passed
    console.log(numbers.length)
    let ans =1;
    for(let i=0;i<numbers.length;i++)
    {
            ans *= numbers[i]
    }
    return ans
}

console.log(multiply(3,4,5,2,0.5))

// ------*******HOISTING**-------------
// can acces function before its definitaion
// not applicable for arrow function
console.log('divide result is '+divide(10,5))

function divide(a,b){
    return a/b;
}

// ThiS KEYWORD
let obj = {
    value:34,
    name:'mayur',
    myfunction:function(){
        console.log('From function inside object -> '+this.value)
        console.log(this)
    },
}

obj.myfunction()

