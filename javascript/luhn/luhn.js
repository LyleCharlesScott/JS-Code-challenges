const Luhn = function (number) {
    this.luhn = number.replace(/[ ]+/g, '');
    this.valid = this.checkValidity();
}

Luhn.prototype.checkValidity = function () {
    let num = this.luhn;
    if (num < 2 || num.match(/[^0-9]/g)) return false;

    num = num.split('').map(digit => parseInt(digit, 10));
    for (let i = num.length - 2; i >= 0; i -= 2) { 
        num[i] *= 2;
        num[i] = num[i] > 9 ? num[i] - 9 : num[i];
    };

    return num.reduce((total, digit) => {
        return total + digit;
    }) % 10 === 0;
}

module.exports = Luhn;