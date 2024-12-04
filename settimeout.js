function x(){
    var i = 1;
    for(let  i=0;i<=5;i++){ // var  or // let
    setTimeout(function(){
        console.log(i);     //  var output will be 6 6 6 6 6 or // let output will be 1 2 3 4 5 6

    },i*1000);
}
    console.log("Namaste Javascript");
}
x();



function x(){
    var i = 1;
    for(let  i=0;i<=5;i++){ 
    function close(x){    // every function make the scope for individual or copy of the x for timeout
    setTimeout(function(){
        console.log(i);     // output -> 1 2 3 4 5

    },x*1000);
}
close(i);
}
    console.log("Namaste Javascript");
}
x();