// generator function
function* count() {
  yield 2;
  yield 3;
  yield 4;
  yield 6;
  yield 27;
}

console.log(count());

const even = count();
// now we can use count in js for loop directly
for (const v of even) {
  console.log("hi -> " + v);
}

/////////
function* makeIteator(start, end, step=1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

let one = makeIteator(1, 4);
// for(const val of one){
//     console.log(val)
// }

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (one.next().value == undefined) {
    alert("time up");
  } else {
    btn.innerText = one.next().value;
  }
});
