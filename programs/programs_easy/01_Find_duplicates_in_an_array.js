const findDuplicates = (arrNum) => {
    return arrNum.filter((ele, index, arr) => {
        return arr.indexOf(ele) !== index;
    })
}

const arrNum = [1, 2, 2, 3, 4, 5, 5, 6, 7]
console.log(findDuplicates(arrNum));