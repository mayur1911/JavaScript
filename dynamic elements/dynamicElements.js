// create elements dynamically in my-container div

const clickButton = document.getElementById('clickButton');
const container = document.getElementById('my-container');

let cnt =1;
clickButton.addEventListener('click', ()=> {
    const el = document.createElement('h1');
    el.innerText='Mayur yewale ' + cnt;
    container.appendChild(el);
    cnt++;
});


