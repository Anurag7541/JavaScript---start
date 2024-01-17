const accountId = 14553
let accountEmail = "a34@mail.com"
var password = "23456"
accountCity = "Rajgir"

// accountId = 2//not allowed

accountEmail = "akj@mail.com"
accountPassword = "123457"
accountCity = "Bangaluru"

console.log(accountId);
/*

prefer not to use var
because of issue in block scope and functional scope


*/

console.table([accountId,accountEmail,accountPassword,accountCity])