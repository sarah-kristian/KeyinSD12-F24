// Description: JavaScript practice for Keyin College (SD12, Semester 2)
// Practice with functions (functions as statements (St), expressions (Ex), and arrow functions (Af)).
// Date: Sep 22-23, 2024
// Author: Sarah Perry


let num;
let str;
let myNum;
let myString;
let myString2;

// 1.	Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 15243;    // reverseNumber(15234)
// Expected Output: 34251


myNum = 15243;

const revNum = num => Number(String(num).split('').reverse().join(''));

console.log(`\n1) Original number: ${myNum} (Reversed Number: ${revNum(myNum)})\n`);



// 2.	Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'keyincollege'
// Expected Output : 'ceeegikllnoy'


myString = 'keyincollege'
const alphabetizeString = string => String(string).split('').sort().join(''); 

console.log(`2) Alphabetized string: ${alphabetizeString(myString)} (original string: ${myString})\n`);


// 3.	Write a JavaScript function to get the extension of a filename.

let fileName;
let myFileName;

// myFileName = 'file.with.fullstops.pdf'
// const getExtension2 = (fileName) => {
//     const index = fileName.lastIndexOf('.');
//     if (index !== -1) {
//         return fileName.slice(index +1);
//     }
//     return 'No extension was provided'
// }; 

myFileName = 'file.with.fullstops.pdf'
const getExtension = (fileName) => {
    const index = fileName.lastIndexOf('.');
    let extension = (index !== -1) ? fileName.slice(index +1) : 'No extension was provided';
    return extension;
}; 


console.log(`3) extension: ${getExtension(myFileName)} (filename: ${myFileName})\n`); // Output: ".pdf"


// 4.	Write a JavaScript function to get the current date.
// Expected Output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


const today = new Date();

function getDateArray(date){
let year = date.getFullYear().toString();
let month = (date.getMonth() + 1).toString().padStart(2, '0');
let day = date.getDate().toString().padStart(2, '0');
return [year, month, day]
}


const dateDMY = dateArray => `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
const dateMDY = dateArray => `${dateArray[1]}-${dateArray[2]}-${dateArray[0]}`;
console.log(`4 a) dd-mm-yyyy format: ${dateDMY(getDateArray(today))}`); // Output: "01-09-2024"
console.log(`  b) mm-dd-yyyy format: ${dateMDY(getDateArray(today))}\n`); // Output: "09-01-2024"


// 5.	Write a function in JavaScript “captalize(str)” that returns the string “str” 
//with its first letter converted to capital (if that is small letter – 
//if it is already capital, returns the string as is)

myString = 'sarah'
myString2 = 123

// const capitalize2 = str => {
//     if (!str) return ''; // Handle empty string or falsy values like null, undefined, etc.
//     if (typeof str !== 'string') return String(str); // Convert non-string to string
//     if (/^[a-zA-Z]/.test(str[0])){ // Check if the first character is alphabetic
//         return str[0].toUpperCase() + str.slice(1);}
//     return str;
// };


// console.log(capitalize2(myString2));


const capitalize = str => (/^[a-zA-Z]/.test(str[0])) ? str[0].toUpperCase() + str.slice(1) : str;

console.log(`5) Capitalized String: ${capitalize(myString)} (original string: ${myString})\n`);



// 6.	Write a function in JavaScript “checkPeriod(str)” that returns “contain period” 
// if str contains a period “.”, otherwise it returns “no period”.

myString = 'file.with.fullstops.pdf'
myString2 = 'noperiod'

// const checkPeriod1 = str => {
//     const index = str.lastIndexOf('.');
//     if (index !== -1) {
//         return 'contains period';
//     }
//     return 'no period'
// }; 

// console.log(checkPeriod1(myString));
// console.log(checkPeriod1(myString2));


const checkPeriod2 = str => str.includes('.') ? 'contains period' : 'no period';

console.log(`6 a) Check ${myString}: ${checkPeriod2(myString)}`);  // Output: "contains period"
console.log(`6 b) Check ${myString2}: ${checkPeriod2(myString2)}\n`); // Output: "no period"

// 7.	Write a function in JavaScript “putSuffix(num)” that 
// takes a number “num” as parameter and puts a suffix with it. 
// For ex, if num is 22 then the function returns 22nd, if num is 23, returns 23rd and so on.
// If user does not provide a parameter, then it should return without anything.

let myNum2; 
myNum = 112
myNum2 = 122

const putSuffix = (num = '') => {
    if (typeof num === 'undefined') return '';
    if (String(num).slice(-2)[0] != 1){ // check if the number ends in 10-19
        if (String(num).slice(-1) == 1) return num + 'st';
        if (String(num).slice(-1) == 2) return num + 'nd';
        if (String(num).slice(-1) == 3) return num + 'rd';
        return num + 'th';
    }
    return num + 'th';
};

console.log(`7 a) ${myNum} -> ${putSuffix(myNum)}`);
console.log(`  b) ${myNum} -> ${putSuffix(myNum2)}\n`);
