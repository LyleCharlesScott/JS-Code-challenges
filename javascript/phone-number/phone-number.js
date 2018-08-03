'use strict';

let PhoneNumber = function (unformattedPhoneNumber) {
    this.phoneNumber = unformattedPhoneNumber;
};

PhoneNumber.prototype.number = function () {
    let formattedNumber = this.phoneNumber.replace(/^1|\+1|\+|\(|\)| |-|\./g, '');
    return formattedNumber.match(/^[2-9]\d{2}[2-9]\d{6}$/g) ? formattedNumber : null;
};

module.exports = PhoneNumber;