// Primitive
//call by value : send copy and never change in original value .

// 7 types : String  , number , boolean , null , undefined , symbol ,bigint

const score =100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null//complete empty
//let userEmail;//undefined value 
let userEmail = undefined; // both work same .

//symbol use in unique. even value same but both are stored as different values .
//and datatypes of symbol is symbol
const id = Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

const bigNumber = 56714238493085
console.log(typeof bigNumber);
const bigNum = 56714232388493085n //use n in end for store the big int number 
console.log(typeof bigNum );



// Reference type (non - primitive )
//call by reference : actual referenced value are sended for the change
// means change will directly happens into the original value or original memory 
//location

//array , objects , functions

const heros = ["sharktiman","naagraj","doga"]


let my_obj = {
                name : "anushka",
                age : 19
            }


const myFunction = function(){
    console.log("hello world");    
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp); //value of outsideTemp = null //type is object
//null is unique so value comes is object 
console.log(typeof scoreValue);
console.log(typeof myFunction);  // in documention is call object function 
// thats why return type is function .

console.log(typeof anotherId);// symbol have symbol data type .


// type of values are in documentation 






















