let age =72;

if(age>=80)
{
    console.log("your are adult ,still can vote")
}
else if(age>= 18)
    {
        console.log("you can vote")
    }
else{
    console.log("you cannot vote")
}

// TERNAERY operator
age >= 18 ? console.log('yes'):console.log('no')


let option =1;
switch(option){
    case 1:{
        console.log('namaste')
        break
    }
    case 2:{
        console.log('Hello')
        break
    }
    default:console.log('invalid option')
}

///--------------------------------
//  &&, || , ! 
let gender = 'male';
if(age>=18 && gender=='male')
{
    console.log('you are male')
}


