const inputNum = 5;
let  fact = 1;
const factorialCheck = (num) => {
    if (num < 0) {
        console.log(`factorial of ${num} is not possible`);
    }

    else {
        for (let i = 1; i <= inputNum; i++) {
            fact = fact * i;
        }
    }

    return fact;
}

console.log(factorialCheck(inputNum));