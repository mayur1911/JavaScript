// 

let a =20
let b = 10
// asyn return promise , that it will give data
// as result takes some time

async function getData(params) {
    let resutlFromServer = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    )
    console.log("Data from server ");
    console.log(await resutlFromServer.json());
};


getData();
console.log(a+b) // gets printed first , due to async await

