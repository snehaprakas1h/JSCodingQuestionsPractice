const arrayNum = [1,2,3,4,5,6,7,8,9,10];

const evenNum = arrayNum.filter((item)=>{
    return item%2===0
})

const oddNum = arrayNum.filter((item)=>{
    return item%2!==0
})

console.log(evenNum);
console.log(oddNum);

