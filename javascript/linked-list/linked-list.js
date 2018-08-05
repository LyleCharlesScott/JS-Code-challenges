'use strict';

const LinkedList = function () {
    this.frontOfList = null;
    this.backOfList = null;
}

LinkedList.prototype.push = function (value) {
    if (this._isEmptyList()) return this._startNewList(value);
    this.backOfList.previousNood = new Nood({value, nextNood: this.backOfList});
    this.backOfList = this.backOfList.previousNood;
    return this.count();
}

LinkedList.prototype.pop = function () {
    let poppedNood = this.backOfList;
    this.backOfList = poppedNood.nextNood;
    return poppedNood.value;
}

LinkedList.prototype.unshift = function (value) {
    if (this._isEmptyList()) return this._startNewList(value);
    this.frontOfList.nextNood = new Nood({value, previousNood: this.frontOfList});
    this.frontOfList = this.frontOfList.nextNood;
    return this.count();
}

LinkedList.prototype.shift = function () {
    let shiftedNood = this.frontOfList;
    this.frontOfList = shiftedNood.previousNood;
    return shiftedNood.value;
}

LinkedList.prototype.delete = function (value) {
    let deletedNood = this._identifyNoodByValue(value);
    if (deletedNood !== this.frontOfList && deletedNood !== this.backOfList) {
        let infrontOfDeletedNood = deletedNood.nextNood;
        let behindDeletedNood = deletedNood.previousNood;
        infrontOfDeletedNood.previousNood = behindDeletedNood;
        behindDeletedNood.nextNood = infrontOfDeletedNood;
        return this.count();
    }
    if (deletedNood === this.frontOfList && deletedNood === this.backOfList) {
        this.frontOfList = null;
        this.backOfList = null;
        return this.count();
    }
    if (deletedNood === this.frontOfList) this.shift();
    if (deletedNood === this.backOfList) this.pop();
    return this.count();
}

LinkedList.prototype._identifyNoodByValue = function (value) {
    if (this._isEmptyList()) return null;
    let currentNood = this.frontOfList;
    while (currentNood.value !== value) currentNood = currentNood.previousNood;
    return currentNood;
} 

LinkedList.prototype._startNewList = function (value) {
    this.frontOfList = new Nood({value});
    this.backOfList = this.frontOfList;
    return this;
}

LinkedList.prototype._isEmptyList = function () {
    return this.frontOfList === null;
}

LinkedList.prototype.count = function () {
    let count = 0;
    if (this._isEmptyList() === false) {
        count ++;
        let currentNood = this.frontOfList;
        while (currentNood.previousNood !== null) {
            count ++;
            currentNood = currentNood.previousNood;
        } 
    }
    return count;
}

const Nood = function (parameters) {
    this.previousNood = parameters.previousNood || null;
    this.value = parameters.value;
    this.nextNood = parameters.nextNood || null;
}

module.exports = LinkedList;
