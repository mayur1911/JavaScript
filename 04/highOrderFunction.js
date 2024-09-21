// fucntion which takes function as argument

function add(a,c, cb){
    let result = a + c;
    cb(result);
}

add(3,51,function(val){
    console.log(val);
});