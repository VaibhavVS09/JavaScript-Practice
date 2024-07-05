const name = "vaibhav";
const repotCount = 10;

//old way for string concatination
console.log(name + repotCount + " Value");

//new or modern way for string concatination
//By Using string interpolation
//string interpolation can be done using template literals
console.log(`My name is${name} and my repo count is ${repotCount}`);

const myName = new String("Vaibhav");
console.log(myName);
console.log(myName[1]);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf("a"));
//substring
const newName = myName.substring(0, 2);
console.log(newName);
//slice
const stringSlice = myName.slice(-5, 4);
console.log(stringSlice);
//trim
const stringTrim = "    vaibhav    ";
console.log(stringTrim);
console.log(stringTrim.trim());
//replace
const url = "https://www.google.com%20vaibhav";
console.log(url.replace("%20", "-"));
//includes
console.log(url.includes("vaibhav"));
//split
console.log(myName.split("a"));
