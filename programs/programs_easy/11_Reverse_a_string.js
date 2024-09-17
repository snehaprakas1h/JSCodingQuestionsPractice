const inputStr = 'tempo';

// const reverseStr = (str) =>{
//     return str.split("").reverse().join("");
// }

const reverseStr = (str) => str.split("").reverse().join("");
//This is called an implicit return and works because the function consists of a single expression.

console.log(reverseStr(inputStr));