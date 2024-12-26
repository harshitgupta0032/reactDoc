//***************************************************** rest  ********************************
console.log("")
function join(separator, ...values){
    return values.join(separator);
}
console.log(join("|","one","two","three"));

function newJoin(id, ...user){
    return user.join(id);
}
console.log(newJoin(" ","Harshit","Mohit","Raj"));

//***************************************************** spread operator   ********************************
console.log("")
console.log("spread operator ")
function sum(first, second, third) {
    return first + second +third;
}

const nums = [ 7, 42, 99 ]
console.log(sum(...nums))

//***************************************************** merge two array using spread operator   ********************************
console.log("example 2")
const place = ["delhi","noida","ayodhya","greater noida"];
console.log("array 1 "+ place);
const newPlace = ["banglore","mumbai","rajashthan"];
console.log("array 2 "+ newPlace);
const mergetwoarray = [...place,...newPlace];
console.log("using spread operator  ");
console.log(mergetwoarray)

//***************************************************** merge two object using spread operator   ********************************
console.log("")
const newplace1 = {
    name:"harshit",
    number : 23232,
}
const newplace2 = {
    name2:"mohit",
    number2 : 12212,
}
console.log({...newplace1,...newplace2});
//***************************************************** if we give same name then it will update our value   ********************************
const newplace3 = {
    name:"mohit",
    number2 : 100,
}
console.log({...newplace1,...newplace2, ...newplace3});
