// Description: JavaScript practice for Keyin College (SD12, Semester 2)
// Practice with functions (functions as statements (St), expressions (Ex), and arrow functions (Af)).
// Date: Sep 16-17, 2024
// Author: Sarah Perry



// 1.	Given r (radius) of a circle, calculate the area of a circle (A = π * r * r).

//method 1: 
function areaSt(r){
    const A = Math.PI * r * r;
    return A;
}

//method 2: 
const areaEx = function (r){
    let A = Math.PI * r * r;
    return A;   
}

//method 3: 
const areaAr = (r) => Math.PI * r * r; 

console.log(`1 a) Given r = 3, A = ${areaSt(3)}`); // 1 a) Given r = 3, A = 28.274333882308138
console.log(`  b) Given r = 4, A = ${areaEx(4)}`); //   b) Given r = 4, A = 50.26548245743669
console.log(`  c) Given r = 5, A = ${areaAr(5)}`); //   c) Given r = 5, A = 78.53981633974483
console.log('')


// 2.	Simulate rolling a dice using random(). If no parameter is specified, the function defaults to a d6. 

// method 1:
function rollSt(numSides = 6){
    const randomRoll = Math.floor(Math.random() * numSides) + 1;
    return randomRoll
}

// method 2:
const rollAr = (sides = 6) => Math.floor(Math.random() * sides) + 1;


console.log(`2 a) roll result, d6: ${rollSt()} (no parametres provided)`); // return value between 1 & 6 inclusive
console.log(`  b) roll result, d6: ${rollAr(6)}`);                         // return value between 1 & 6 inclusive
console.log('')



// 3.	Write a function that converts values in Celcius to Farenheit: convert(0) should return "32 F".


const convertToF = (celcius) => (celcius * 9/5) + 32

console.log(`3 a) 0C = ${convertToF(0)}F`);     //3 a) 0C = 32F
console.log(`  b) 20C = ${convertToF(20)}F`);   //  b) 20C = 68F
console.log('')


// 4.	Modify your solution to the previous function to allow a second argument: "F" or "C", and use that to determine what the scale of the value is, converting to the opposite: convert(122, "F") should return "50 C".

// method 1:
function convertTempSt(degree, mode){
    let temp;
    let tempSt;
    if (mode === "C") {
        temp = (degree * 9/5) + 32;
        tempSt = `${temp}F`;
    }
    if  (mode === "F") {
        temp = ((degree - 32) * 5/9);
        tempSt = `${temp}C`;
    }
    return tempSt;
}

// method 2:
const convertTempAr = (degree, mode) => {if (mode === "C"){return `${(degree * 9/5) + 32}F`;}else{return `${((degree - 32) * 5/9)}C`}};


console.log(`4 a) 0C = ${convertTempSt(0,"C")}`);   // 4 a) 0C = 32F
console.log(`  b) 32F = ${convertTempSt(32,"F")}`); //   b) 32F = 0C
console.log(`  c) 32C = ${convertTempAr(32,"C")}`); //   c) 32C = 89.6F
console.log('')



// 5.	Function taking any number of arguments (Numbers), 
// returning true if they are all less than a specified number: isUnder50(1, 2, 3, 5, 4, 65) should return false.

// method 1:
function isUnder50(...numbers){
    let count = numbers.length;
    for (let i = 0; i < count; i++){
        if (numbers[i] >= 50){
            return false
        }
    }
    return true;
}

// method 2:
const isUnder60 = (...numbers) => {for (let i = 0; i < numbers.length; i++){if (numbers[i] > 60){return false}} return true;}


// method 3:
const isUnder70 = (...numbers) => numbers.every(num => num < 70);

console.log('5) All of the numbers 1, 2, 3, 5, 4, 65 are...'); 
console.log(`    under 50: ${isUnder50(1, 2, 3, 5, 4, 65)}`); // false
console.log(`    under 60: ${isUnder60(1, 2, 3, 5, 4, 65)}`); // false
console.log(`    under 70: ${isUnder70(1, 2, 3, 5, 4, 65)}`); // true
console.log();


// 6.	Function allowing any number of arguments (Numbers), returning their sum: sum(1, 2, 3) should return 6.

function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(`6 a) Sum(1, 2, 3) = ${sum(1, 2, 3)}`);       // 6 a) Sum(1, 2, 3) = 6
console.log(`  b) Sum(1, 2, 3, 4) = ${sum(1, 2, 3, 4)}`); //   b) Sum(1, 2, 3, 4) = 10
console.log();


// 7.	Function to check if a number is a multiple of a given numer (returns true or false)


const multipleX = (n,X) => (n % X === 0);

console.log(`7) 6 is a multiple of 3: ${multipleX(6,3)}`); //7) 6 is a multiple of 3: true
console.log();


// 8.	Function to subtract a discount % from a total. If no % is given, return the original value.

const amount = (total, disc = 0) => (total - disc*total);

console.log(`8 a) 25% discount off $10: $${amount(10,.25)}`);  //8 a) 25% discount off $10: $7.5
console.log(`  b) no discount off $100: $${amount(100)}`);     //  b) no discount off $100: $100 
console.log();

// 9.	Function that takes a number of seconds as a Number, returning a String formatted like "X Days, Y Hours, Z Minutes" rounded to the nearest second.



function convertSeconds(n) {
    const sec = n % 60;
    const day = Math.floor(n / (60 * 60 * 24));
    const hr = Math.floor((n / (60 * 60)) % 24);
    const min = Math.floor((n / 60) % 60);


    const dayString = day === 0 ? '' : `${day} day, `;
    const hourString = hr === 0 ? '' : `${hr} hr, `;
    const minString = min === 0 ? '' : `${min} min, `;
    const secString = sec === 0 ? '' : `${sec} sec`;

    return `${dayString}${hourString}${minString}${secString}`;
}

console.log(`9 a) 100,875 seconds = ${convertSeconds(100875)}`); //  9 a) 100,875 seconds = 1 Day, 4 Hours, 1 Minute, 15 Seconds
console.log(`  b) 875 seconds = ${convertSeconds(875)}`)         //    b) 875 seconds = 0 Days, 0 Hours, 14 Minutes, 35 Seconds
console.log();


// 10.	Modify your solution above to only include units that make sense: "1 Minute" vs. "3 Hours, 5 Minutes" vs. "1 Day, 1 Hour, 56 Minutes" etc

function convertSec(n) {
    const sec = Math.floor(n % 60);
    const min = Math.floor((n / 60) % 60);
    const hr = Math.floor((n / (60 * 60)) % 24);
    const day = Math.floor(n / (60 * 60 * 24));

    const formatUnit = (value, singular, plural) => `${value} ${value === 1 ? singular : plural}`;

    const dayString = formatUnit(day, 'Day', 'Days');
    const hourString = formatUnit(hr, 'Hour', 'Hours');
    const minString = formatUnit(min, 'Minute', 'Minutes');
    const secString = formatUnit(sec, 'Second', 'Seconds');

    return `${dayString}, ${hourString}, ${minString}, ${secString}`;
}

console.log(`10 a) 100,875 seconds = ${convertSec(100875)}`); //  10 a) 100,875 seconds = 1 Day, 4 Hours, 1 Minute, 15 Seconds
console.log(`   b) 875 seconds = ${convertSec(875)}`)         //     b) 875 seconds = 14 Minutes, 35 Seconds
console.log();
