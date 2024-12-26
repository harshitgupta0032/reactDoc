console.log("");
// ******************************In ES6 we use backtick for initialize value in string ******************************
function getFullName(title, fname, lname, degree) {
    return `${title} ${fname} ${lname}, ${degree};`
}

console.log(getFullName('Rear Admiral', 'Grace', 'Hopper', 'PhD'));

function getFullName2(title, fname, lname, degree) {
    return ` title : ${title} \n fullname: ${fname} \n last name : ${lname} \n degree : ${degree};`
}

console.log(getFullName2('Rear Admiral', 'Grace', 'Hopper', 'PhD'));

// ***************************************** Sum of two number using function ***********************

function sum(num1, num2) {
    return num1 + num2
}
function sumInString(num1, num2) {
    return `${num1} + ${num2} = ${sum(num1, num2)}`;
}

console.log(sum(4, 6))
console.log(sumInString(4, 6))

// ************************************************* Example 2 ***********************

function sumType2(num1, num2) {
    return `${num1} + ${num2} = ${num1 + num2}`;
}
console.log(sumType2(8, 7));