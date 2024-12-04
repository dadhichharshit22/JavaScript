
/*Hoisting in Javascript */
// getName();
// console.log(x);
// console.log(getName);

var x = 2;

function getName(){
    console.log("Namaste Dunia");
}


// Another way of declaration is also behaves like variable and undefined
var getName2 = function () {

}

// Arrow Function is behaves like varaible and undefined 
var getName = () => {
    console.log("Namaste Dunia");
}

getName();
console.log(x);
console.log(getName);

