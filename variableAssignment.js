console.log("");
var myvariable = 42;
let myvariable2 = 42;
const myOtherVariable = "forty two";

console.log("let : we can reassign of let variable");
console.log("const : we cann't reassign of const variable");

console.log("");
let a = 5;
console.log(`before reassign of let variable : ${a}` )
a = 6;
console.log(`After reassign of let variable : ${a}`)
// const b = 8;
// b = 9;
console.log("");
console.log("const b = 8")
console.log("b = 9;    its throw error")

console.log("");
console.log("we cann't change the const variable but we change after assign an object")
console.log("");
const word = {
    name: "harshit"
}
console.log(`const assign in object before change  : ${word.name}`);
word.name = "harshit gupta"
console.log(`const assign in object after change : ${word.name}`);
console.log("");

// console.log(x) // its throw undefined
// var x = 1; 

// console.log(y) // its throw reference error
// let y = 1;