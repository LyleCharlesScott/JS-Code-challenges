var Year = function (year) {
 this.gregorian = year;
};

Year.prototype.isLeap = function () {
  return this.gregorian%4 === 0 ?
    (this.gregorian%100 === 0 ? this.gregorian%400 === 0 : true) : false
}
module.exports = Year;