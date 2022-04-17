const isPrime = require("./isPrime");

module.exports = function primeFactors(number, factors) {
    factors = factors || [];

    if (isPrime(number)) {
        factors.push(number);
        return factors;
    }

    let i = 2;

    while (true) {
        if (number % i == 0 && isPrime(i)) {
            factors.push(i);
            return primeFactors(number / i, factors);
        }

        i++;
    }
}