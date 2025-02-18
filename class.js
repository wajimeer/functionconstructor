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
    return `this is new function-`
}
const animals = [new Dog(),new Cat(),new Animal()]
animals.forEach((animal)=>{
    console.log(animal.speak());
    
})

class User {
    constructor (name,age){
        this._name=name
        this._age=age
    }
    get name(){
        return this._name;
    }
    set name(newname){
        if (newname.length>2){
            this._name=newname
        }else{
            console.log(`name must be greater then 3 word`)
        }
       
    }
    get age(){
        return this._age;
    }
    set age(newage){
        if(newage>0){
            this._age=newage
        }
        else{
            console.log(`age must be greater then`)
        }
    }
}
const person1 = new User("waji",21)
// person1.name='mo'
console.log(person1.name="ali")

function angram(obj1,obj2){
    let str1='';
    let str2='';
    for(let check of obj1){
        if(check!==''){
            str1+=check.toLowerCase()
        }
    }
    for(let check of obj2){
        if(check!==''){
            str2+=check.toLowerCase()
        }
    }
    // if (str1.length!==str2.length){
    //     return false;
    // }
    let arr1=[]
    let arr2=[]
    for (let i = 0; i < str1.length; i++) {
       arr1.push(str1[i])
        
    }
    for (let i = 0; i < str2.length; i++) {
       arr2.push(str2[i]);
        
    }
    function sorting(arr){
        let n=arr.length
        for(let i=0;i<n-1;i++){
            for(let j=0; j<n-i-1; j++){
                if(arr[j]>arr[j+1]){
                    let x = arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=x
                }
            }
        }
    }
    sorting(arr1)
    sorting(arr2)
    for (let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }
    return true;

}
console.log(angram('listen','silent'))