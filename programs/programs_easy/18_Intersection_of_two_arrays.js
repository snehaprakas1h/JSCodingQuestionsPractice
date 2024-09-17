var arr1 = [1,2,3,4,4,4,4,5];
var arr2 = [3,4,5];

const intersectionArr = arr1.filter((ele)=>{
    return arr2.includes(ele);
})

console.log([...new Set(intersectionArr)]);