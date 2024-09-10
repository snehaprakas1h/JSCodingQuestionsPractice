const findMaxNumber = (arr) => {
    return arr.reduce((prev, curr) => {
        return prev > curr ? prev : curr
    })
}

const arr = [1,4,5,7,98]
console.log(findMaxNumber(arr));