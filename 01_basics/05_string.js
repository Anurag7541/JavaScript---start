const name = "Anurag"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Anurag-pc')
console.log(gameName[0]);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)//isme negative value v dal sakte hain.
console.log(anotherString)


const newStringOne = "   Anurag  "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://Anurag.com//Anurag%20singh"
console.log(url.replace('%20', '-'))

console.log(url.includes('vishal'))

console.log(gameName.split('-'))

// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }