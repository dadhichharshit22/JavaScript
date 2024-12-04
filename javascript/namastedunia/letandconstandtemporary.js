// console.log(a);
// let a=10;  // it strict and is stored memory in the different space and no in the global space

// var b = 100; // it is excess in the global space or we can say in the window global object

// let is more strick than the var
// let a = 10;   --> this are shown the syntax error
// let a = 100     when we can use same let name twice

// when we access let before the initiaized are shown refernce error
// ans this are temporal dead zone


// but in var we declared twice the same name 
// var a = 10;  --> this not show any error
// var a = 100;     it is accept in the var


// const are more strick then the let
let x;
const y = 10;
x = 10;
//y = 10; we cannot declared after initialised we need declared at the initialised time and it show syntax error
//y= 100; --> it show the type error at the output
console.log(x);
console.log(y);

// There are three types of error
// 1.type error  2. syntax error  3. reference error 

// There are three datatypes it arranged in order of priority
// 1.const 2.let 3.var

// To avoid temproal dead zone write all initialized on the top