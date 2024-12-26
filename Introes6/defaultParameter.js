// ****************************************************if our value are not decleared so we give the default value***********************
console.log("");
console.log("if our value are not decleared so we give the default value")
function myFunc(foo = 42){
    console.log(foo);
}
console.log("without giving value");
myFunc();

// ****************************************************if we give the default value and aur value are also given so its coose the given value***********************
console.log("after decleared value");
myFunc(46);

const { foo = 42, bar = 'forty two' } = { foo: 7 }
console.log(foo, bar) 

const { foo2 = 42, bar2 = 'forty two' } = { foo2: 17, bar2:"thirty two" }
console.log(foo2, bar2) 