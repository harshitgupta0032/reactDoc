
//***************************************************** destructuring assignment trying all type in object  ******************************** 
//***************************************************** (String , number, boolean)  ******************************** 
const user = {
    name : "Harshit gupta",
    email : "123abc@gmail.com",
    place : "delhi",
    number : 234324,
    admin : true,
}

const {name, email, place, number, admin} = user;
console.log("");
console.log("Object Destructuring :- ")
console.log("");
console.log(`User name : ${name}`)
console.log(`User email : ${email}`)
console.log(`User number : ${number}`)
console.log(`isadmin : ${admin}`)
console.log("");
console.log("Arrays Destructuring :- ")
console.log("");

//******************************************************** Arrays destructuring  ******************************** 

const place2 = ["Ayodhya", "Delhi", "Greater noida", "noida"];

const [a,b,c,d] = place2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
//***************************************************** swap two number without taking third variable using array destructuring  ********************************
console.log("");
console.log("swap two variable without taking third variable :- ");

let x = 5;
let y = 6;

console.log(`a : ${x}, b : ${y}`);
[x,y] = [y,x];
console.log("after swap");
console.log(`a : ${x}, b : ${y}`);

//***************************************************** trying to swap String without taking third variable  ********************************
console.log("");
console.log("trying with string")
let x1 = "Delhi";
let y1 = "Noida";
console.log(`a : ${x1}, b : ${y1}`);
console.log("after swap");
[x1,y1] = [y1,x1];
console.log(`a : ${x1}, b : ${y1}`);


//***************************************************** swaping  taking third variable  ********************************
console.log("");
console.log("Swaping using third variable")
let x2 = 2;
let y2 = 4;
console.log(`a : ${x2}, b : ${y2}`);

let temp = x2;
x2 = y2;
y2 = temp;
console.log("after swap");

console.log(`a : ${x2}, b : ${y2}`);



//***************************************************** ignore first value before @ using regex  ********************************
console.log("");
const str = 'bey@knowles.com'
const rgx = /\@(\w+\.\w+)/
let [,match] = str.match(rgx)
console.log(`ignore first value using rexeg ${match}`);

//***************************************************** trying to ignore value before and after @ using regex  ********************************
const st = 'bey@knowles@.com';
const rg = /\@(\w+\w+)/;
let [, match1] = st.match(rg);
console.log(`ignore first last value before and after @ using regex: ${match1}`);

