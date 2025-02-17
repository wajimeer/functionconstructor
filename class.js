class Animal{
    speak(){
        return `animals make sounds`
    }
}
class Dog extends Animal{
    speak(){
        return`Dog make sound`
    }
}
class Cat extends Animal{
    speak(){
        return `cat make sound`
    }
}
Animal.prototype.speak=function (){
    return `this is new function`
}
const animals = [new Dog(),new Cat(),new Animal()]
animals.forEach((animal)=>{
    console.log(animal.speak());
    
})