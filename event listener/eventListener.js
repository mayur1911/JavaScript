// listen event or watch event

// button events -> click 
// load page , close page event

// click event 
function handleButtonClick()
{
    console.log('That button is clicked')
}

const el = document.getElementById('clickButton');
// first way , here methods get overridden
el.onclick = function(){
    console.log('Hey I am clicked from js file funciton nwo')
};

// second way most preferrred
// handles multiple methods
el.addEventListener('click',function(){
    console.log('clicked from addevent listener')
})

const nameBlock = document.getElementById('name-block');

el.addEventListener('click',function(){
    // from here we are changing content of nameBlock
    if(nameBlock.style.color === "red"){
        nameBlock.style.color = "blue";
    }
   else{
    nameBlock.style.color ="red"
   }
    
})

// remove element which is clicked
console.log(document.querySelector("body").children);
const allChildren = document.querySelector("body").children;

for(let i=0;i<allChildren.length;i++)
{
    allChildren.item(i).addEventListener("click",()=>{
        allChildren.item(i).remove();
    })
}
