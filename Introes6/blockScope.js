var x = 1;
var y = 2;

function printer(){
    var x = 3;
    var z = 4;
    console.log(`value of x in scope : ${x}`)
    console.log(`value of y in scope : ${y}`)
    console.log(`value of z in scope : ${z}`)
}
printer();
console.log(x)
console.log(y)

// **************************************** var varialbe decleared and redecleared in scope and out of scope ********************************
console.log("");
console.log("If we declare a variable with var and then redeclare it in the  scope, the var variable will take the second value")
var a = 3;
console.log("before the scope : "+a);
function checkVar(){
    a = 4;
    console.log("in the scope : "+a);
}
checkVar();
console.log("out of scope "+a);

let a1 = 1;
if(true){
    let a1 = 2;
    console.log("In scope "+a1);
}
console.log("out of scope "+a1);

let y1 = 1;
let z = null;

for(let i = 0; i<3; ++i){
    console.log(y1); 
    console.log(i);
    z = i; // z = 0, z = 1, z = 2; update every iteration
}
console.log(z); // z take the value of i 
console.log(i); // i is not defaine so it throw error