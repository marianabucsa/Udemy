/*
// Lecture: values and variables
let js = "amazing";
console.log(48 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);
let firstName = "Matilda";
let first = "Jonas";
let firstNamePerson = "Max";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415; //constants have uppercases names

// name your variables propperly
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

//not like this
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
// Lecture : data types
true; //boolean value
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; cannot be modified

// const job; we need an enitial value

var job = "programmer";// not recomended to use var
job = "teacher";

// not recomended
lastName = "Bucsa";
console.log(lastName);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2**3 means 2 to the power of 3

const fristName = "Mariana";
const lastName = "Bucsa";
console.log(fristName + " " + lastName);
//asignment operators
let x = 10 + 5;  //15
x += 10; //x=x+10 = 25
x *= 4 // x=x*4=100
x++; //x=x+1
x--; //x=x-1
x--;
console.log(x);
//comparison operators
console.log(ageJonas > ageSarah); //< > >= <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x=y=10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageSarah, ageJonas);
console.log(averageAge);
*/
/*
const firstName = "Mariana";
const job = "student";
const birthYear = 2000;
const year = 2021;
const mariana = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(mariana);

const marianaNew = ` I'm ${firstName}, a ${(year - birthYear)} years old ${job}! `;
console.log(marianaNew);

console.log("String with \n\
multiple \n\
lines");
console.log(`String with
multiple
lines`);
*/
/*
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`"Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);
*/
/*
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Mariana"));
console.log(typeof NaN);
console.log(String(23), 23);

//type coorcion
console.log("I'm " + 23 + " years old!");
console.log("I'm " + "23" + " years old!");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "4");
console.log("23" / "2");
console.log("23" > "10");

let n = "1" + 1; // n="11"
n = n - 1; // n= 10
console.log(n);
*/

// 5 falsy values : 0,"",undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
