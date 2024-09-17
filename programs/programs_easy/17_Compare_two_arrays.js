var arr1 = [1, 4, 6, 9];
var arr2 = [1, 4, 6, 9];

const isArrSame = arr1.length == arr2.length && arr1.every((currentElement,index) => {
        return currentElement === arr2[index]
})

console.log(isArrSame);