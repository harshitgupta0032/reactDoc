const doStuff = (str1, str2) => {
    const output = `${str1} &amp; ${str2}`
    return output
}
console.log(doStuff(3, 4));

// we can also declare functions with a condensed syntax but only in single output
const addOne = arg => arg + 1

console.log(addOne(5));

//  *******************************sum two in arrow function****************************
// method 1
const sum = (a, b) => {
    return a + b;
}

console.log(sum(2, 8));

// method 2
const sum2 = (a, b) => a + b;
console.log(sum2(14, 6));

// *****************************************we cann't use this fn in arrow function ****************************
function Dog(){
    var that = this;
    this.genus = "Canis";
    document.querySelector(".clickForEvent").addEventListener("click",function (){
        window.alert(that.genus);
    })
}
Dog();

// ********************************Uses of bind ************************

let PrintName = {
    name: "steve",
    sayHi: function () {

        console.log(this.name); 
    }
}
PrintName.sayHi();

// bind method is used to create a new function that, and this value set to a specified value

let nameObj = {
    name: "Tony"
}
const PrintNew = PrintName.sayHi.bind(nameObj);
PrintNew();
