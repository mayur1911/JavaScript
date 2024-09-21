function main() {
  const name = "mayur yeole";

  function getName() {
    console.log(name);
  }
  // getName();
  return getName; // returning function
}

let fn = main();
fn();
console.log(fn);

// -----------------------
function adder(num) {
  function add(b) {
    console.log(num + b);
  }

  return add;
}

const addTo5 = adder(5); // addTo5 will alwasy add nubmer to 5
addTo5(4);
addTo5(9);
