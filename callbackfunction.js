
// what is callback function in javascript

// setTimeout(function (){
//     console.log('Timer')
// },5000);
// function x(y){
// console.log("x");
// y();
// }
// x(function y(){
// console.log("y");
// });


//javascript is synchronous and single-threaded language
// javascript is work line by line and only work one function at one

//Blocking the main thread
// some time one function take too much time then wait the another function for execution 


//Power of callbacks?

//Deep about Event listeners

//closures demo with event listeners

// scope demo with event listeners

//Garbage collection & removeeventlisteners




function attachEventlisteners(){
    let count = 0;
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button clicked",++count);
});
}
attachEventlisteners();
// by using callback function we can use javascript as asynchronous