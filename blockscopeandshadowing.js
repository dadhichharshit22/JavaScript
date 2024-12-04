
// this block
{
    // compound statement
    var a= 10;
    console.log(a);
}

// block scope 
{
    var a =10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);

// Shadowing
var a = 100;
let b = 200;
{
  var a= 10;
  let b = 20;
  const c = 30;
  console.log(a);  // 10 is ans
  console.log(b); // 20 is ans
  console.log(c);
}
console.log(a); // 10 is ans is shadowing
console.log(b); // 200 is ans 


function x(){
    let c= 20;
    console.log(c);
}
x();

// illegal shadowing
let a= 20;
{
    var a = 10; // not work it show error
}
function x(){
    var a= 10; // this is allowed
}


const a= 20;
{
    const a = 100;
    {
        const a = 200;
        console.log(a); // 200
    }
    console.log(a); // 100
}

// arrow function and function scope are same is work like same