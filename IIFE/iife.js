// immediattly invoked funciton expression
// invoking on the spot
// runs as soon as it defined

(function add(a,b){
    console.log(a+b);
})(2,4); // 

const value = (() => 100)();
console.log(value)