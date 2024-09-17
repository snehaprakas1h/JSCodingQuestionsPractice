const inputNum = 12

const findFactors = (num) => {
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            console.log(`factors of num: ${num} are ${i}`);
        }
    }
}

findFactors(inputNum);