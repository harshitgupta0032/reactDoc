console.log("")
function join(separator, ...values){
    return values.join(separator);
}

console.log(join("|","one","two","three"));

function newJoin(id, ...user){
    return user.join(id);
}
console.log(newJoin(" ","Harshit","Mohit","Raj"));

console.log("")
console.log("spread opreater")
function sum(first, second, third) {
    return first + second +third;
}

const nums = [ 7, 42, 99 ]
console.log(sum(...nums))

console.log("example 2")
const place = ["delhi","noida","ayodhya","greater noida"];
console.log("array 1 "+ place);
const newPlace = ["banglore","mumbai","rajashthan"];
console.log("array 2 "+ newPlace);
const mergetwoarray = [...place,...newPlace];
console.log("using spread opreater ");
console.log(mergetwoarray)