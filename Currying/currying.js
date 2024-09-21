function add(a, b, c) {
  return a + b + c;
}
// when all varailbes have value or are availble then only call add

// by using currying in below funciton
function adder(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// adder will not execute until all 3 params are passed

console.log(adder(3)(4)(7));

// example
function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(
        `Sending email to ${to} with subject ${subject} and body is ${body}`
      );
    };
  };
}

// another way to implement currying
const sentAutoEmailPart2 = (to) => (subject) => (body) =>
  console.log(
    `Sending email to ${to} with subject ${subject} and body is ${body}`
  );

let step1 = sendAutoEmail("abc@gmail.com");
let step2 = step1("Leave application");
let step3 = step2("This is body of maail");
