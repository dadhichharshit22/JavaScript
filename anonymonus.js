// that function without a name is called anonymonus function


//a(); it work fine and show the output is a is called
//b(); // this show the error at the termainal because it like var not function
// function statement aka function declaration
function a(){
    console.log("a is called");
}


// function expression   ==> function act as value 
var b = function(){  // or const b is also work as temporal dead zone 
    console.log("b is called");
}
a();
b();
//anonymous function
// function (){   // it work as a value in the variable 

// }

// Named function expression
var c = function xyz(){  // in which we write the function name 
    console.log('c is called');
}
c();
//differce between parameters & arguments
// parameters
function x(para1,para2){ // para1 is identifier or we can say parameters

}
x(1,2) // this is arguments
//first class function
var z = function (param1){
 //console.log(param1);
 return function xyz(){

 }
}
 
// function xyz(){

// }
// z(xyz);
console.log(z());
// ability to function use a value  and passed inside the function aand data out 
//from the function and return and assign in the variable is called first class function or
// first class citizens



// arrow function 
// it is used in ES6


