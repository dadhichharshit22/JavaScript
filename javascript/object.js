// {} // -->object literals
// [] // --> array literals
// () // -->function literals
// let name = {
//     body: 1,
//     nameLast:'harshit',
// };
// console.log(name.body);

// object created
// const rectangle = {
//     lenght: 1,
//     breadth: 2,
//     // behaviour of the object
//     // function is that entity is which done a single well defined tasks
//     draw: function(){   //-> this is not a function this is a method of these object and function is not write entity 
//         console.log('drawing rectangle');
//     }
// };
// how object created us-
// factory function

function createRectangle(len,bre){
    return rectangle = {
        length : len, // lenght: length 
        breath : bre, // breadth: breath 
        // behaviour of the object
        // function is that entity is which done a single well defined tasks
        // draw: function(){   //-> this is not a function this is a method of these object and function is not write entity 
        //     console.log('drawing rectangle');
        // },
        // both are same but we can defined in different way
        draw(){
            console.log('rectangle drawing');
        }
    };
   // return rectangle;

   
}
let rectangleobj1 = createRectangle(5,4);
let rectangleobj2 = createRectangle(2,3);
let rectangleobj3 = createRectangle(1,2);
console.log(rectangleobj2.length);
// Camel notation -> numberOfStudent
// constructor function ->pascal notation - in which first word are capital->NumberOfStudent

// constructor function -> props/method ->initialse/define
function Rectangle(length,breadth){
    this.length = length;
    this.breadth = breadth;
    this.draw= function(){
      console.log("drawing a rectangle");
    }

}

// object creation using constructor function
let rectangleobject = new Rectangle();
console.log(typeof(rectangle));
// this->current object refer

// Dynamic nature of object
rectangleobject.colour = 'blue';
delete rectangleobject.colour;

// constructorproperty
rectangleobject.constructor;

// function is also an object 
// And Every object is constructor
let rectangle1 = new Function('length','breadth',` this.length = length;
this.breadth = breadth;
this.draw= function(){
  console.log("drawing a rectangle");
}`)

let rect = new rectangle1(2,3);
console.log(rect);

// Primitive types
// let a = 10;
// let b = a;   copy the a into b
// a++;
// console.log(a);
// console.log(b);

// Refernce types
let ans = {
    value: 1
};
let yns = ans; // Same address par point karta hai
ans.value++;
console.log(ans.value);
console.log(yns.value);

// Primitive are copied by thier value
// Reference are copied by thier address/reference

let h = 10;
function inc(h){  // due pass by value h are not changed outside the function
    h++;
}
inc(h);
console.log(h);

let u = {
    value:100
};
function inca(u){  // pass by refernce conecpt 
    inca.value++;
}
inca(u);
console.log(u);

let square = {
    lenght: 1,
    breadth: 2

};

// for-in loop
for(let key in square){
    // key are reflected through key variable
    // values are reflected througth rectangle[key]
    console.log(key,square[key]);
}

// for-of ->iterables->Array,maps
for(let key of Object.keys(square)){  // or object.enteries(square)
    console.log(key);
}
// This is check properties are persent in the object or not
if('lenght' in square){
    console.log('Persent');
}
else{
    console.log('Absent');
}

// Cloning
// 1. Iterator cloning 

let src={
    value:1
};
let des={};
for(let key in src){
    des[key]=src[key];
}
// 2. Assign cloning
let de = Object.assign({},src);

// 3. spread cloning
let dest = {...src};

// Garbage collection : We are not control on garbage collection and run in background
// In this automatically is de-allocated the var/let in the js