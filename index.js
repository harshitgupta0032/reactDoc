console.log("Two types of destructuring :- ")

console.log("1. Array destructuring :- ")
const words = ["❤️", "es6"];

const [feeling, version] = words;

console.log(feeling)
console.log(version)

console.log(`I ${feeling} ${version}`);

console.log("");
console.log("2. Object destructuring :- ")

const word1 = { feelings: "❤️", versions: "es6" };
const {feelings, versions} = word1;

console.log(word1.feelings)
console.log(word1.versions)
console.log(`I ${feelings} ${versions}`);


