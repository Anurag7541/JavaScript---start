const user = {
    username:"anurag",
    
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }


}
user.welcomeMessage()//anurag,welcome to website
user.username = "Sarena"
user.welcomeMessage()
user.loginid = "@sdfgh"
user.welcomeMessage()
// console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

// const chai = () => {
//     let username = "anurag"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1,num2) =>{

//     return num1 + num2

// }
// console.log(addTwo(3,4))

// const addTwo = (num1,num2) => num1 + num2///arrow function
// const addTwo2 = (num1,num2) => (num1 + num2)


// console.log(addTwo(3,4))