const PrimeFactors = function () {
};

PrimeFactors.prototype.for = function (numberToFactor) {
    return getAllPrimeFactors([], numberToFactor);
}

module.exports = new PrimeFactors();

let verifiedPrimes = [2, 3];

const getAllPrimeFactors = function (primeFactorsSoFar = [], numberToFactor) {
    if (numberToFactor === 1) return [];
    let smallestPrimeFactor = findSmallestPrimeFactor(numberToFactor);
    let divisor = numberToFactor/smallestPrimeFactor;
    primeFactorsSoFar.push(smallestPrimeFactor);
    return divisor === 1 ? 
        primeFactorsSoFar : getAllPrimeFactors(primeFactorsSoFar, divisor)
}

const findSmallestPrimeFactor = function (numberToFactor) {
    let index = 0;
    while (numberToFactor % verifiedPrimes[index] !== 0 && 
        index < verifiedPrimes.length - 1) {
            index++;
    };
    return numberToFactor % verifiedPrimes[index] === 0 ? 
        verifiedPrimes[index] : continueSearchingforMorePrimes(numberToFactor);
}

const continueSearchingforMorePrimes = function (numberToFactor) {
    let numberToTest = (verifiedPrimes.slice(-1)[0] + 2);
    while (numberToTest < Math.sqrt(numberToFactor)) {
        if (isPrime(numberToTest)) {
            verifiedPrimes.push(numberToTest);
            if (numberToFactor % numberToTest === 0) {
                return numberToTest;
            }
        }
        numberToTest += 2;
    }
    return numberToFactor;
}

const isPrime = function (num) { 
    // if (num === 2 || num === 3) return true;
    // if (num % 2 === 0 || num % 3 === 0) return false;
    // not sure what's most elegant! If 46-47 aren't included, it's not really
    // fair to call this function isPrime, because it won't work for everything. 
    // But those checks aren't strictly needed in this specific implementation. 
    // But I don't know what else is a good thing to call this function. HMMMMMM.....
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i+2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}