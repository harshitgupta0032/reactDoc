console.log("")
class Animal {
    constructor(leg = 0){ // leg = 0 are default parameter if leg did not have any value then default value are set
        this.leg = leg;
    }
    
    move(){
        if(this.leg > 0){
            console.log('walk')
        }else{
            console.log('slither')
        }
    }
}
console.log("Decleared value in object")
let animal = new Animal(10); // create a object oF animal
animal.move();

console.log("didn't Decleared value in object")
let animal2 = new Animal();
animal2.move();

// ***************************************** extend object anothe class
console.log("")

class Dog extends Animal{
    constructor(leg = 4, sound = "ruff"){
        super(leg); // take the value from extended class (Animal)
        this.sound = sound;
    }
    bark(){
        console.log(this.sound);
    }
}
let myDog = new Dog(4);
console.log(myDog.leg) // dog is the parent of animal object so we can call threw parent object
myDog.move();
myDog.bark();