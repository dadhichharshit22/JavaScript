// varaiable shadowing
var a=100;
let b = 100;
const c = 100;
{
    var a = 10;
    let b = 10;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);


// function shadowing
const d = 100;
function x(){
    const d = 10;
    console.log(d);
}
console.log(d);
x();


// illegal shadowing are not possible 
// let e = 10;
// {
//     var e = 100;
// }

let e =10;
function x(){
    var e = 100;
    console.log(e);
}
console.log(e);

// it is prefect fine 
var f = 10;
{
    let f = 100;
    console.log(f);
}
console.log(f);


const g = 10;
function x(){
    console.log(g);
}

// Lexical Block scope
const h = 10;
{
    const h = 100;
    {
        const h = 200;
        console.log(h);
        {
            console.log(h);

        }
    }
    console.log(h);

    
}
console.log(h);