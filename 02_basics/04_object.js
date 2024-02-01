const tinderUser = {}

tinderUser.id = "123@6969"
tinderUser.name = "Sanaya"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const onlinegamingid = {
    email: "Dream11@6969",
    Fullname: {
        userFullname: {
            firstname: "Sanaya",
            lastname: "Singh"
        }
    }
};
// console.log(onlinegamingid.Fullname.firstname.lastname);//

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
//const obj3 = {obj1,obj2}

// const obj3 = object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"A@gmail.com"
    },
];

users[0].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//object de-structure

const course = {
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
const{courseInstructor:instructor}=course
const{price:price}=course
console.log(instructor);
console.log(price)