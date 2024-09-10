const sumOfAllItemsInAnArray = (arr) =>{
    return arr.reduce((prev,curr)=>{
        return prev+curr
    },0);
}

const arrSum = [1,2,3,4,5];

console.log(sumOfAllItemsInAnArray(arrSum));