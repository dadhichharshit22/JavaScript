

// function + lexico scope = closure
function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    y();
}
x();
// This is also valid or we can defined as as var is equal to function
function x(){
    var a=function y(){
        console.log(a);
    }
    y();
}
x();

// This is also valid or we can say that we pass function as a argument 
function x(){
    var a=10;
   
}
x( function y(){
    console.log(a);
}
);

// This is another way 
function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);

// .....................
// it will also find a value because of lexical scope
z();


