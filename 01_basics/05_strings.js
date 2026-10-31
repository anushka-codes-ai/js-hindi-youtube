const name = " Anushka "// string declare
const repoCount = 15

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Anushka-AC')// string declare using new keyword.
//use JS objects 
//object invoke
// string is object
//key : value pair.
// key  (index): value (string(""))

// benefits length property and get other method


console.log(gameName[0]);
console.log(gameName.__proto__);//{} empty object
console.log(gameName.__proto__.length);//?????????????
console.log(gameName.length);
console.log(gameName.toUpperCase());// not change the original string .

console.log(gameName.charAt(2));// which value at certain index 
//console.log(gameName.charAt('t'))// why work ???????

console.log(gameName.indexOf('t'));// value at which index // return the index value .

const newString = gameName.substring(0,4)//last value is not included.
console.log(newString);

const anotherString = gameName.slice(-8,4) //start from backwork and upto the 4 th character
// we give this  -ve value 
//in -ve start from backword and in +ve case start from left to right direction .
// then start from reverse

console.log(anotherString);

//in substring we can't start with -ve if we start forcefull then they automatically start from 0 and ignore our value .
const newString2 = gameName.substring(-4,4)
console.log(newString2);


const newStringOne = "     Anushka      " // user knowing or unknowing ly add space
// we don't want to store in db that things

console.log(newStringOne);
console.log(newStringOne.trim());// remove space and line terminator

// no change 
// const url = "http://anushka.com/anushka%20chauhan"
// url.replace('%20','-');
// console.log(url);
//so
const url = "http://anushka.com/anushka%20chauhan"
console.log(url.replace('%20','-'));// created a usable url.

// methods knows then u can drive a values multiples.

console.log(url.includes('anushka'));
console.log(url.includes('Anushka'));//check this keyword exist or not in the string .

//convert string to araay 
console.log(gameName.split('-'));// split based on dash!

// do practice of string
// use ${} not + because thats the old practice 









