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
