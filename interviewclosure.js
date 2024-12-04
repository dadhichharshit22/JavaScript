// function outest(){
//     var c = 20;
// function outer(b){
//    // var a= 10;
//    let a = 10;
//     function inner(){
//    console.log(a,b,c);  // output will be 10 and also make closure 
//     }
//     return inner;
// }
// return outest;
// }
// //outer()(); 
// var close = outest()("hello world");
// close();


// // data abstraction and encapsulation
// function counter(){
//     var count = 0;
//     return function incrementcounter(){
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();            //this is not good practice 
// counter2();
// counter2();counter2();counter2();counter2();



// Now make the good function 

function Counter(){
    var count = 0;
    this.incrementCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementCounter = function (){
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

var counter2 = new Counter();
counter2.incrementCounter();


// smart garbage collector
function a(){
    var x = 0, z= 10;
    return function b(){   
    console.log(x);   // by smart engine garbage collector if z is not used then we can remove these var z fromy the memory location
    } 
}

var y = a();
//..  

y();


