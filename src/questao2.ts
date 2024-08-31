function isFibonacciNumber(num: number): boolean {
    if (num < 0) return false;

    let a = 0, b = 1;
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return a === num;
}

// Altere para escolher o número a ser verificado
const numberToCheck = 21;

console.log(`${numberToCheck} ${isFibonacciNumber(numberToCheck) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);
