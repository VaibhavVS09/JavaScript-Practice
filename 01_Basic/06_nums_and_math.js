const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);

//toString
console.log(balance.toString());
console.log(typeof balance.toString());
//tofixed
console.log(balance.toFixed(2));

//toprecision
const num = 112.1231;
console.log(num.toPrecision(3));

//tolocalesting
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

//++++++++++++++++++Maths+++++++++++++++

console.log(Math);
//abs value
console.log(Math.abs(-100));
//roundup value
console.log(Math.round(5.4));
//top roundup value
console.log(Math.ceil(5.4));
//bottom round value
console.log(Math.floor(5.4));
//square root
console.log(Math.sqrt(100));
//power
console.log(Math.pow(2, 3));
//min
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// max
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//random
console.log(Math.random());
//random fixed
console.log(Math.floor(Math.random() * 10 + 1));

//min to max random
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
