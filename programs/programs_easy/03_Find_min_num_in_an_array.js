const findMinNumber = (arr) => {
    return arr.reduce((prev, curr) => {
        return prev < curr ? prev : curr
    })
}

const arr = [1, 4, 5, 7, 0, 98]
console.log(findMinNumber(arr));