let Gigasecond = function (birthday) {
    this.birthday = birthday;
    this.gigasecond = 1000000000;
};

Gigasecond.prototype.date = function () {
    return new Date(Number(this.birthday) + this.gigasecond*1000); 
}

module.exports = Gigasecond;