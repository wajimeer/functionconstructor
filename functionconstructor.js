function Person ( name,age ,friend){
    this.name=name;
    this.age=age;
    this.friend=friend||[];

}
Person.prototype.addfriend = function (friendname){
    this.friend.push(friendname)
}
let newfriend = new Person('waji',22,['ali','ahmed','jawad'])
console.log(newfriend.friend)
newfriend.addfriend('zain')
console.log(newfriend)  

// Create a Person constructor function that has
//  name and age properties. 
// Add a static method isAdult() that returns
//  true if the person’s age is 18 or above, and false 
// otherwise
function persons(name,age){
    this.name = name;
    this.age=age;
}
persons.prototype.properties = function (){
    if(this.age>18){
        return true
    }else{
        return false;
    }
}
let person1 = new persons('waji',17)
console.log(person1.properties())



// Create a Product constructor function that takes name,
//  price, and category as parameters. Add a method
//   applyDiscount(discount)
//  that applies a percentage discount on the product price.

function product(name,price,category){
    this.name=name;
    this.price=price;
    this.category=category;
}
product.prototype.apllydiscount=function (discount){
    if(discount<0||discount>100){
        console.log(`invalid discount percentage`)
        return;
    }
    this.price-=(this.price*discount)/100;
}
const product1 = new product("Laptop", 1000, "Electronics");
console.log(`Original Price: $${product1.price}`); 

product1.apllydiscount(10); 
console.log(`Discounted Price: $${product1.price}`); 

function sumNestedArray(arr) {
    let sum = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i]; 
        } else if (arr[i]) {
            sum += sumNestedArray(arr[i]);
        }
    }

    return sum;
}


const numbers = [1, [2, [3, 4], 5], [6, 7]];
console.log(sumNestedArray(numbers));

// methode changing
let obj= {
    title:'123',
    author:'waji',
    pages:300,
    method:function(pages){
        this.pages=pages
        return this
    },
    recallingmethode:function(){
        console.log(`${this.title},${this.author},${this.pages}`)
        return this;
    }
}
obj.method(350).recallingmethode()

// animal function nested
function animal(type,breed){
    this.type=type;
    this.breed=breed;

}
animal.prototype.showdetails=function(){
    console.log(`his type is ${this.type} and his breed is ${this.breed} `)
}
function dog(type,breed,speak){
    animal.call(this,type,breed)
    this.speak=speak;
}
dog.prototype=Object.create(animal.prototype)
dog.prototype.constructor=dog;
dog.prototype.bark=function (){
    console.log(`his type is ${this.type} and his breed is ${this.breed} and they bark ${this.speak}`)
}
let ani = new dog("dog","bully","baow baow")
ani.bark()

const team = {
    leader: "Sarah",
    members: [
      { name: "John", role: "Developer" },
      { name: "Ali", role: "Designer" },
      { name: "Emma", role: "Manager" }
    ]
  };
  const {leader,members:[{name:desName},{name:devName},{name:man}]}=team
  console.log(leader)
  console.log(desName)
  console.log(devName)
  console.log(man)

  function userss(name,age){
    this.name=name;
    this.age=age
    this.displayinfo=function(){
        console.log(`this is my ${this.name} and this is my age ${this.age} `)
    }
  }
  const users = new userss('waji',22)
  users.displayinfo()

  function BankingSystem(holdername, balance) {
    this.holdername = holdername;
    this.balance = balance;
}


BankingSystem.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    } else {
        console.log("Deposit amount must be greater than zero.");
    }
};

BankingSystem.prototype.withdraw = function(amount) {
    if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Beep Beep! You withdrew ${amount}. Remaining Balance: ${this.balance}`);
    } else if (amount <= 0) {
        console.log("Withdrawal amount must be greater than zero.");
    } else {
        console.log("Insufficient balance.");
    }
};


const account1 = new BankingSystem("Ali", 5000);
account1.deposit(1000);  
account1.withdraw(2000);  
account1.withdraw(5000);  


function car(brand ,model){
    this.brand=brand;
    this.model=model;
}
car.prototype.getdetails = ()=>{
    return `brand:${this.brand},Model:${this.model}`
}
const mycar =new car('toyota','corolla')
console.log(mycar.getdetails());
//the answer is undefifine because arrow function have his this
//key is lexical because they can't reffer the object.

const obj23 ={
    name:"ali",
    age:25,
    getage:function(){
        return this.age;
    },
    getname:()=>{
        return this.name;
    }
}
console.log(obj23.getage())
console.log(obj23.getname())
//the answer of the age will be give us but name give undifend
//or give error because arrow function have his this keyword 
//in lexical sope because they can't reffer the object

function animal(name,sound){
    this.name=name;
    this.sound=sound;
}
animal.prototype.makesound = function(){
    return`${this.name} says ${this.sound}`
}
animal.prototype. eat=
   function(){
        return`${this.name} is eating`
    }

const dogi = new animal('dog','bark')
console.log(dogi.makesound())
console.log(dogi.eat())
//the answer of that question is when program run they check
//the code line by line when they see
//  console.log(dogi.makesound())they were incorrect
//  the program through error

const personprototype ={
    greet:function(){
        return `hello, my name is ${this.name}`
    }
}
const person12 =Object.create(personprototype)
person12.name="waji"
function persos(name){
    this.name=name;
}
persos.prototype.greet = function (){
    return `hello ,my name is ${this.name}`
}
const pers = new persos('sara')
console.log(person12.greet())
console.log(pers.greet())


function vehicle(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  
  vehicle.prototype.speeed = function () {
    return `This ${this.brand} is moving with the speed of ${this.speed}`;
  };
  
  function Car(brand, speed, fuelType) {
    vehicle.call(this, brand, speed);
    this.fuelType = fuelType;
  }
  Car.prototype = Object.create(vehicle.prototype);
  Car.prototype.constructor = Car;
  
  Car.prototype.fueltype = function () {
    return `This ${this.brand} gave good Average on ${this.fuelType}`;
  };
  let vehicle1 = new vehicle("Toyota", "120kmh");
  let car1 = new Car("Toyota", 120, "Diesel");
  
  console.log(car1.fueltype());
  console.log(car1.speeed());


  function circle(radius){
    this.radius=radius;
    this.area=function(){
        return Math.PI *this.radius*this.radius
    }
    this.circumference = function (){
        return 2*Math.PI*this.radius
    }
  }
  let circ =  new circle(5)
  console.log(circ.area())
  console.log(circ.circumference())

  function deepclone(obj){
    let empty ={}
    for (let key in obj){
        if(typeof obj[key]==='object'&&obj[key]!==null){
            empty[key]=deepclone(obj[key])
        }else{
            empty[key]=obj[key]
        }
    }
    return empty
  }
let ob = {
    name:'waji',
    adress:{
        city:"lahore"
    }
}
 let clone = deepclone(ob)
 clone.adress.city="karachi"
 console.log(ob.adress.city)
 console.log(clone.adress.city)


 let large={
    a:10,b:20,c:30,d:40,e:5
 }
 let largest = large["a"]
 for(let key in large){
    if(large[key]<largest){
        largest=large[key]
    }
 }
 console.log(largest)

 function grade(stud){
    for(let key in stud){
        console.log(key[science]+''+key[stud])
    }
 }

//  console.log(grade(grad))

 function count(obj){
    let counter = 0
    for(let key in obj){
        counter[key]=obj[key]
        counter ++;
    }
 }
 let grad={
    math:85,
    science:20,
    phy:30
 }
console.log(count(grad))

const arr =[ 1,2,3,4,5]
let emptyarr = arr[0]
for(let i=0; i<arr.length;i++){   
    if(arr[i]<emptyarr){
        emptyarr.push(arr[i])
    } 
}
console.log(emptyarr)

function hasDuplicate(nums) {
    const seen = new Set();  // Ek empty Set create kiya
    for (const num of nums) {  // Har number ko loop mein check karenge
        if (seen.has(num)) {  // Agar Set mein pehle se hai toh duplicate hai
            return true;
        }
        seen.add(num);  // Agar nahi hai toh Set mein add kar do
    }
    return false;  // Agar koi duplicate na mila toh false return karo
}
console.log(hasDuplicate([1,2,3,4,4]))