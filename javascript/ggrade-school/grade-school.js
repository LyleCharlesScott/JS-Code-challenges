const School = function() {
  this._roster = {};
  Object.defineProperty(this, "protectedRoster", {
    get: () => this._roster
  })
}

School.prototype.add = function(name, grade) {
  if (this._roster[grade] === undefined) {
    this._roster[grade] = [];
  }
  this._roster[grade].push(name);
  this._roster[grade] = this._roster[grade].sort();
}

School.prototype.grade = function(grade) {
  return this.protectedRoster[grade] || [];
}

School.prototype.roster = function() {
  return this.protectedRoster;
}

module.exports = School;