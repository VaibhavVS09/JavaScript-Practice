// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//function

function fruitProcessor(apples, mango) {
  const juice = `Juice with ${apples} apples and ${mango} mangoes.`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const mangoesjuice = fruitProcessor(0, 5);
console.log(mangoesjuice);
