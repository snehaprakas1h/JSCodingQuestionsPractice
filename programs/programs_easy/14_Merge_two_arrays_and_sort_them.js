const arr1 = [1, 23, 5, 57];
const arr2 = [8, 13, 17, 20, 2];

//concat opertaor

const finalArray = arr1.concat(arr2);
const sortedArray = finalArray.sort((a, b) => a - b);
console.log(sortedArray);

//spread operator
const result = [...arr1, ...arr2]
const sortedArray1 = result.sort((a, b) => a - b);
console.log(sortedArray1);
