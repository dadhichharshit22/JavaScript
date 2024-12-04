// import { multiply } from "./utility.js";
// change the variable name 
// import {multiply as mul} from "./utility.js";

// we can change the name of default without using as
import add from "./utility.js"; // we can excess deafult is only oneadd
let b  = add(1,2,3);
console.log(b);

import * as mu from "utility.js";
import { mul,add } from "./utility.js";
const  res = mu.mul(10,20,30);
console.log(res);
