const at = function (hour, minutes) {
    return new Clock(hour, minutes);
}

const Clock = function (hour = 0, minutes = 0) {
    this.hour = this._normalizeHour(hour);
    this.minutes = this._normalizeMinutes(minutes);
};

Clock.prototype.toString = function () {
    return `${this._getDisplay('hour')}:${this._getDisplay('minutes')}`;
}

Clock.prototype.equals = function (clock) {
    return this.toString() === clock.toString();
}

Clock.prototype.plus = function (minutes) {
    minutes = this.minutes + minutes;
    this.minutes = this._normalizeMinutes(minutes);
    return this;
}

Clock.prototype.minus = function (minutes) {
    minutes = this.minutes - minutes;
    this.minutes = this._normalizeMinutes(minutes);
    return this;
}

Clock.prototype._getDisplay = function (minutesOrHours) {
    return this[minutesOrHours].toString().padStart(2, '0');
}

Clock.prototype._normalizeHour = function (hour) {
    hour %= 24;
    if (hour < 0) hour += 24;
    return hour
}

Clock.prototype._normalizeMinutes = function (minutes) {
    this.hour = this._normalizeHour(Math.floor(minutes/60) + this.hour);
    minutes %= 60;
    if (minutes < 0) minutes += 60;
    return minutes;
}

module.exports.at = at;