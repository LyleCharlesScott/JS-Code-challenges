const armstrongNumbers = function () {}

armstrongNumbers.validate = function (number) {
    return number === number.toString().split('').reduce((total, digit, index, digitList) => {
        total += Math.pow(parseInt(digit, 10), digitList.length);
        return total;
    }, 0);

}

module.exports = armstrongNumbers;

