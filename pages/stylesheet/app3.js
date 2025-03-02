console.log("Hello am working");
console.log("That awesome am learning");
console.log(1 + 2); // 3

// single line comment
/* multiline comment */

// 4 parts to variable declaration
// 1. declaration keyword
// 2. name of the variable
// 3. assignment operator
// 4. value of the variable

// var, let, const

var name;
var $name;
var _name;
var name1;
var n1;
var $1;

var my_name;
// camel casing convention
var myName;
var weatherIsNice;

// assignment operator
var yourName = "Glory";

let myStatus = "ok";
myStatus = "tired"; 
console.log(myStatus); // 'tired'

// reassigning that variables to another value
myStatus = "Fired";

let myHouse = "Beautiful house";
let student = "Catherine";
let tutor = "Tamara";

let joined = "hi there" + ", my name is lishya";
console.log(joined); // 'hi there, my name is lishya'

let yourAge = '55';
console.log(typeof joined); // 'string'
console.log(typeof yourAge); // 'string'

let pi = 3.14;
let radius = 7;
let diameter = radius * 2;
console.log(diameter); // 14
let isMarried = true;
console.log(isMarried); // true

let undefinedVar = undefined;
let undefinedVar2;

let num = '5';
console.log(typeof num); // 'string'

// string methods

let str = 'learning javascript';
console.log(str.toUpperCase()); // 'LEARNING JAVASCRIPT'

str = str.toUpperCase();
console.log(str); // 'LEARNING JAVASCRIPT'

str = str.toLowerCase();
console.log(str); // 'learning javascript'

console.log(str.includes('a')); // true
console.log(str.startsWith('learn')); // true
console.log(str.endsWith('ipt')); // true

console.log(str[12]); // 'a'

let weight = 65.896832732901;
console.log(Math.round(weight));  66
console.log(Math.ceil(weight)); 66
console.log(Math.random() * 50); // random number between 0 and 50 

// 0, false, undefined, null, "", none

console.log('Ba' + NaN + 'a')

// //conditions
const gravity =40

if(gravity> 30){
    console.log('Gravity is hugee')
}

//comparison of operators
let thisnum = '34'  

//lazy comparison -type comparison
console.log(thisnum == 34)

//strict comparison
console.log("23" + 23);
console.log("23" == 23);
console.log("23" === 23);

if (gravity){
    console.log("Gravity is quite small");
    weAreFloating = false

}

console.log(weAreFloating);

//comparison operators

console.log(gravity==31);

if (NaN){
    console.log("truthy");
}else
{
    console.log("falsy");

}
 
//small = 8-10  medium = 11-17
//and operator &&
//or operator ||
let size = 17;
if (size >= 8 && size <= 10){
    console.log('Your size is small');
  
}
else if(size >= 11 && size <=12){
    console.log('your size is medium');
}
else if(size >= 13 && size <=15){
    console.log('your size is large');
}
else if(size >= 16 && size <=18){
    console.log('your size is extra large');
}
//use back slash to escape
else {
    console.log('we don\'t have your size');
}

let weatherIsGud = true;
if(weatherIsGud == true)
    {
    console.log('I am going out');
    
}
else {
    console.log('i am staying home');
}

if(!weatherIsGud){
   console.log('I am staying home') ;
}

console.log(!false)

//tenery operator

weatherIsGud == true > console.log('going out'); console.log('staying in')

let goingOutStatus = weatherIsGud == false ? "yes" : "No";
console.log(goingOutStatus)

let goingOutStatus2;
if ( weatherIsGud == true){
    goingOutStatus2 ="yes"; 
}
else{
    goingOutStatus2 = " No";
}

let count = 0
console.log(count)


count =count + 1
count =count + 1
count =count + 1
count =count + 1
count =count + 1
count =count + 1
count =count + 1
count =count + 1
count =count + 1

console.log(count)

count +=1
count ++ //post increment
++count //pre increment
console.log(count)

let minus = -1
minus -=1
minus --
console.log(minus)

let multiply=2
multiply =multiply +1
multiply +=2

 console.log(multiply)

 console.log(multiply **2)

 let divide = 4
 divide = divide/4
 console.log (divide)

//  alert('you are old enough to drive');
//  let drive = 17
//  console.log ('you are' + 18 +)

//Backtick
let firstName = 'Lishya'
let LastName = 'Muchiri'
let string = 'Hi ${ firstName} ${lastName}'

console.log (string); 