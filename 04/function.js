// functions

function sayHello(){
    console.log('hello from function')
}

sayHello()

function add(a,b) // arguments
{
    console.log(a+b)
}

add(6,85) // parameter

function multiply(a,b){
    return a*b;
}

let c = multiply(3,5)
console.log('result is '+c)

// variable arguments
function addNumbers(){
    console.log(arguments)
    let sum=0
    for(let i=0;i<arguments.length;i++)
    {
        sum+= arguments[i]

    }
    console.log('sum of all argumets is '+ sum)

    
}

addNumbers(3,6,3,6,4,4,4,20,-20,-12)
