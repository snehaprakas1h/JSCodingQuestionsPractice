const arrNum = [1, 3, 5, 7, 8, 10];
const missingNum = [];

const missingValue = (arr) => {
    maxValue = Math.max(...arr);
    minValue = Math.min(...arr);
    for (let i = minValue; i < maxValue; i++) {
        if(arr.indexOf(i)<0){
            missingNum.push(i);
        }
    }

    return missingNum;
}

console.log(missingValue(arrNum));