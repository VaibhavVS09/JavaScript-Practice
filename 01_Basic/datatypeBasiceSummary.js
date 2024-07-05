//Primitive Data Types
//Call by Value
//1->String
//2->Number
//3->Boolean
//4->Null
//5->Undefined
//6->Symbol

const score = 100;
const scoreValue = 100.3;
let userEmail;
const bigNumber = 3215646131561651651561n;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);
//Call by Reference
//1->Object
//2->Array
//3->Function
//4->Date
//5->Error
//6->Map
//7->Set
//8->WeakMap
//9->WeakSet

//Array
const car = ["bmw", "audi", "mercedes"];
//Object
const person = {
  id: 1,
  name: "vaibhav",
  age: 22,
};

const hello = function () {
  console.log("hello");
};

//Array,Object,Function

//Stack(Primitive Data Types)
//The all primitive datatype values are stored in Stack memory and we get the copy of it.

// Heap(Non-Primitive Data Types)
//The all non-primitive datatype values are stored in Heap memory and we get the reference of it.

let name = "Vaibhav";
let lastname = name;
lastname = "satvekar";
console.log(name);
console.log(lastname);

//use objet

let user1 = {
  userEmail: "vaibahv@gmail.com",
  upi: "vaibhav@upi",
};
let user2 = user1;
user2.userEmail = "vs@gmail.com";

console.log(user1.userEmail);
console.log(user2.userEmail);
