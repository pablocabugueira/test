function fibonacciTester(number) {
    let a = 0, b = 1, nextNumber;

    if (number === a || number === b) {
        return `O número ${number} pertence à sequência.`;
    }

    while (b < number) {
        nextNumber = a + b;
        a = b;
        b = nextNumber;
    }

    if (b === number) {
        return `O número ${number} pertence à sequência.`;
    } else {
        return `O número ${number} não pertence à sequência.`;
    }
}

let number = 15;

console.log(fibonacciTester(number));