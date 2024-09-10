// Description: JavaScript practice for Keyin College (SD12, Semester 2)
// Date: Sep 9, 2024
// Author: Sarah Perry


let tab = '    ' // creating white space for output

// 1) create string variables & concatanate

let label = 'keyincollege';
let tld = 'ca';
let domainName = label + '.' + tld;
console.log(`1) Domain Name: ${domainName}`);

// 2) assign boolean values to a variable
let isKeyin = domainName === 'keyincollege.ca';
console.log(`2) Is Domain Name Keyin?: ${isKeyin}`);

// 3) assign boolean value to a variable
let isNotKeyin = !isKeyin;
console.log(`3) Is Domain Name NOT Keyin?: ${isNotKeyin}`);

// 4 & 5) assign integer variables & create moc IPAddress
let byte1 = 198;
let byte2 = 110;
let byte3 = 1;
let byte4 = 255;

let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;
console.log(`5) ip Address: ${ipAddress}`);

// 6) Create multiplication table

function createTimesTable(number) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${number} x ${i} = ${number * i}`);
  }
  return table;
}

timesTable = createTimesTable(15);
console.log('6) Multiplication table');
timesTable.forEach(function (line) {
  console.log(tab + line);
});

// 7a) even numbers
let evenNumbers = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenNumbers.push(i);
  }
}

// 7b) odd numbers
let oddNumbers = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    oddNumbers.push(i); //
  }
}

console.log('7) even and odd numbers');
console.log('   even numbers:');
console.log(tab + evenNumbers);
console.log('   odd numbers:');
console.log(tab + oddNumbers);

// 8) sum all even numbers
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(`8) sum of even numbers: ${sum}`);

// 9) is n a perfect number?

function checkPerfectValue(n) {
  let sumDivisors = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sumDivisors += i;
    }
  }

  let isPerfect = n === sumDivisors - n;

  return `${n} is a perfect number is ${isPerfect}`;
}

console.log('9) Is n a perfect number?');
console.log(tab + checkPerfectValue(28));
console.log(tab + checkPerfectValue(30));

// 10) is n prime?

function findDivisors(n) {
  let divisors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function isPrime(n) {
  let isPrime = findDivisors(n).length === 2;
  return isPrime;
}

console.log('10) Is a number prime?');
console.log(`   Is 5 prime?: ${isPrime(5)}`);
console.log(`   Is 6 prime?: ${isPrime(6)}`);