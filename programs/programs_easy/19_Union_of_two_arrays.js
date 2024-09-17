var arr1 = [1,3,5,8,9];
var arr2 = [2,4,6];

const unionArr = [...arr1,...arr2];

const sortedArr = [...new Set(unionArr)].sort((a,b)=>a-b);
console.log(sortedArr);