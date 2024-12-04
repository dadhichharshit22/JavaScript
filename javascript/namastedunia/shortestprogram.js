// Anything inside the javascript are in global space and function are also in global
// space 
// But if var in any function then var are not in global space 


// There are v8 engine in the chrome for the javascript 

var a = 10;
function b(){
    var x = 100;
}

console.log(window.a);
console.log(a);
console.log(this.a);