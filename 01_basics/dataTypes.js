/// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol(kisi value ko unique banane ke lye symbol ka use kya jata hai)
// BigInt

//JavaScript is a dynamically typed language,
// which means that data types of variables are determined by
// the value they hold at runtime and can change throughout 
//the program as we assign different values to them

const score = 100
const scoreValue = 100

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non-Primitive)

// Array , objects , functions

const heros = ["shaktiman","naagraj","doga"];
let myobj = {
    name: " Anurag",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world ")
}

// console.log(typeof myFunction)//function
// console.log(typeof score)//number
// console.log(typeof undefined)//object