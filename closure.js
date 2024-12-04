function x(){
    var a= 7;
    return function y(){
        console.log(a); // output is 100 beacuse is reference to the memory and it is update
    }
    a = 100;
   /// return y; // function + lexical environment == closure
}

// function with her lexical enviroment bundle are know as closure
var z = x();
console.log(z);
//......

z();




function z(){
    var b = 900;
    function x(){
     var a= 7;
     function y(){
        console.log(a,b);
     }
     y();
    }
    x();
}
z();