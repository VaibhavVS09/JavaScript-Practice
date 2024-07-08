//Date

let myDate = new Date();
//type of Date
console.log(typeof myDate);

//normal date function ans-2024-07-05T12:06:06.583Z
console.log(myDate);
//byusing tostring ans-Fri Jul 05 2024 17:36:06 GMT+0530 (India Standard Time)
console.log(myDate.toString());
//byusing toISOString ans-2024-07-05T12:06:06.583Z
console.log(myDate.toISOString());
//Byuing toJSON ans-2024-07-05T12:06:06.583Z
console.log(myDate.toJSON());
//Byusing LocaleDateString ans-07/05/2024
console.log(myDate.toLocaleDateString());
//Byusing LocaleString ans-5/7/2024, 5:36:06 pm
console.log(myDate.toLocaleString());
//Byusing LocaleTimeString ans-5:36:06 pm
console.log(myDate.toLocaleTimeString());
//Bysing TimeSting ans-17:39:13 GMT+0530 (India Standard Time)
console.log(myDate.toTimeString());
//Bysing UTCSting ans-Fri, 05 Jul 2024 12:10:37 GMT
console.log(myDate.toUTCString());
//Bysing TimezoneOffset ans-330
console.log(myDate.getTimezoneOffset());
//Bysing Date ans-2024-07-05
let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate.Date);

//Date.now()
let myTimeSatap = Date.now();
console.log(myTimeSatap);
console.log(myCreateDate.getTime());
//Date.now() / 1000
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
//newDate.setFullYear(2023, 0, 23);
console.log(newDate);
//getting the month
console.log(newDate.getMonth() + 1);
//getting the date
console.log(newDate.getDate());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    timeZone: "UTC",
  })
);
