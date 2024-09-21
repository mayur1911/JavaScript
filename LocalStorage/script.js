const button = document.getElementById('clickButton')
const uname = document.getElementById('username')
const username = document.getElementById('name')


button.addEventListener('click', ()=>{
    const value = uname.value;
    localStorage.setItem('username',value); // add to lcoal storage as key value pair
 //   username.innerText = value;
    location.reload()
})


window.addEventListener('load',()=>{
    const value = localStorage.getItem('username');
    username.innerText = value;
})

