//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
 this.gregorian = year;
};

Year.prototype.isLeap = function () {
    return this.gregorian%4 === 0 ? 
        (this.gregorian%100 === 0 ? this.gregorian%400 === 0 : true) : false
}
module.exports = Year;