let score = "vaibhav";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//notes
//here the type of valueInNumber is number but we get this output like as below
//"33" => 33
//"33abc"=>NaN
//true=>1
//false=>0
//null=>0
//undefined=>NaN
//NaN=>NaN

let isLoggedIn = "vaibhav";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//When we convert it into boolean
//1 => true
//"" => false
//"value" => true

let someNumber = 9;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
//number to string convert

//*********************** Operations **************************
let value = 9;
let negValue = -value;
console.log(negValue);

let str1 = "vaibhav";
let str2 = "Satvekar";
let str3 = str1 + " " + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+" ");
