function makeIteator(start = 0, end = Infinity, stepSize = 1) {
  let nextStart = start;
  let iterationCount = 0;
  return {
    next() {
      let result;
      if (start + iterationCount <= end) {
        result = { value: nextStart, done: false };
        nextStart = nextStart + stepSize;
        iterationCount++;
        return result;
      }
      return {
        value: iterationCount,
        done: true,
      };
    },
  };
}

const myIterator = makeIteator(10, 15, 1);
// console.log('hi')
console.log(myIterator);
// console.log('hello')
let result = myIterator.next();
console.log(result);

while (!result.done) {
  console.log(result);
  result = myIterator.next();
}

// we cannot use thie iterator with js for loop

const iterator1 = makeIteator(10, 4, 1); // First iterator starting from 10
const iterator2 = makeIteator(20, 4, 2); // Second iterator starting from 20

// Use iterator1
let result1 = iterator1.next();
console.log(result1);  // { value: 10, done: false }
result1 = iterator1.next();
console.log(result1);  // { value: 11, done: false }

// Use iterator2
let result2 = iterator2.next();
console.log(result2);  // { value: 20, done: false }
result2 = iterator2.next();
console.log(result2);  // { value: 22, done: false }


// They are independent and do not interfere with each other.
//  Each has its own nextStart, iterationCount, and they execute their own next() method calls separately.

// This happens because every time you call makeIterator, it creates a new closure with its own local 
// variables (nextStart, iterationCount), which are not shared between different instances.