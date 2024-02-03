// function sayMyname(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// // sayMyname()//refernce

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);

// }
// // addTwoNumbers(9,13)
function addTwoNumbers(number1,number2){
    // let result = number1+number2;
  
    // return result;

    return number1+number2
}

const result = addTwoNumbers(3,5)//parameter
// console.log("result",result)

function loginUsermsg(username){
    if(username===undefined){
        // console.log("please enter the usrname")
    }
    // return `${username}just logged in`
}
// console.log(loginUsermsg("Khana")//
// console.log(loginUsermsg(""));//undefined





// const square = function(number){
//     return number*number;
// };
//   console.log(square(5))
// function multTwoNumbers(number1,number2){
//     console.log(number1*number2);
// }

// const result2 = multTwoNumbers(5,8)
//     console.log("result",result2);

//function in object

function calculateCartprice(...num1){//...rest operatro
    return num1

}
// console.log(calculateCartprice(200,400,500))

const company = {
    companyname:"louis vuitton",
    price:345999
}

function Amairiobject(anyobject){
    console.log(`companyname is ${anyobject.companyname} and price is ${anyobject.price}`);

}
// Amairiobject(company)

Amairiobject({
    companyname:"Zara",
    price:12000
    
});
// Amairiobject(company)
