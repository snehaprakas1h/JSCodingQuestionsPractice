const numb = 3;

const checkPrimeNum = num => {
    if (num == 1) {
        console.log(`${num} this is not prime number its a composite number`);
        return false;
    }

    else if (num < 1) {
        console.log(`this number - ${num} is less than 1`);
        return false;
    }

    else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log(`this number - ${num} is not a prime number`);
                return false;
            }
        }
        console.log(`This number ${num} is a prime number.`);
        return true
    }
}

console.log(checkPrimeNum(numb));