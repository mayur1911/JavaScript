function add(a, b) {
  return a + b;
}

function multiply(a, b) {
    return a * b;
  }

function square(val) {
  return val * val;
}

function addTwoandSquare(a, b) {
  return square(add(a, b));
}

let result = addTwoandSquare(7, 4);
console.log(result);

// Composition : we compose multiple functions
function composeTwoFunction(fn1, fn2) {
  // will compose any two functions
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

let task = composeTwoFunction(add,square);

console.log(task(5,7)) // will use compose function

task = composeTwoFunction(multiply,square);

console.log(task(5,3)) // this will now use multiply function as fn1


// -------- COMPOSIT FUNCITON FOR UNLIMITED FUNCITONS 
