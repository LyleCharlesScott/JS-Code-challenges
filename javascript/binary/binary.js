const binary = function (binaryNumber = '0') {
    this.binaryNumber = binaryNumber.match(/[^0-1]/g) ? '0' : binaryNumber;
};

binary.prototype.toDecimal = function () {
    let decimal = 0;
    this.binaryNumber.split('').reverse().forEach((binary, index) => {
        if (binary === '1') {
            decimal += Math.pow(2, index);
        }
    })
    return decimal;
};

module.exports = binary;