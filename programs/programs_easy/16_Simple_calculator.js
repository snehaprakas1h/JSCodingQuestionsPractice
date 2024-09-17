let num1 = Number('17');
let num2 = Number('10');

const simpleCalculator = (num1, num2, operator) => {

    let result;

    if (operator == '+') {
        result = num1 + num2;
    }
    else if (operator == '-') {
        if (num1 > num2) {
            result = num1 - num2;
        }
        else {
            result = num2 - num1;
        }
    }
    else if (operator == '*') {
        result = num1 * num2;
    }
    else if (operator == '/') {
        if (num1 > num2) {
            result = num1 / num2;
        }
        else {
            result = num2 / num1;
        }
    }

    else {
        console.log('please enter a valid operator in "+","-","*","/" ')
    }

    return result;
}

console.log(simpleCalculator(num1,num2,'*'));