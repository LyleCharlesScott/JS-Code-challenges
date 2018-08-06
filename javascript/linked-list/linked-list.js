'use strict';

const LinkedList = function () {
    this.clearList()
}

LinkedList.prototype.push = function (value) {
    if (this._isEmptyList()) return this._startNewList(value);
    this.tail.previousNood = new Nood({value, nextNood: this.tail});
    this._reassignTail(this.tail.previousNood);
    this.length ++;
    return this.count();
}

LinkedList.prototype.pop = function () {
    let poppedNood = this.tail;
    this._reassignTail(poppedNood.nextNood);
    this.length --;
    return poppedNood.value;
}

LinkedList.prototype.unshift = function (value) {
    if (this._isEmptyList()) return this._startNewList(value);
    this.head.nextNood = new Nood({value, previousNood: this.head});
    this._reassignHead(this.head.nextNood);
    this.length ++
    return this.count();
}

LinkedList.prototype.shift = function () {
    let shiftedNood = this.head;
    this._reassignHead(shiftedNood.previousNood);
    this.length --;
    return shiftedNood.value;
}

LinkedList.prototype.delete = function (value) {
    let deletedNood = this._identifyNoodByValue(value);
    switch (deletedNood) {
        case (null) :
            break;
        case (this.head) :
            this.shift();
            break;
        case (this.tail):
            this.pop();
            break;
        default :
            let infrontOfDeletedNood = deletedNood.nextNood;
            let behindDeletedNood = deletedNood.previousNood;
            infrontOfDeletedNood.previousNood = behindDeletedNood;
            behindDeletedNood.nextNood = infrontOfDeletedNood;
            this.length --;
    }
    return this.count();

}

LinkedList.prototype._identifyNoodByValue = function (value) {
    if (this._isEmptyList()) return null;
    let currentNood = this.tail;
    while (currentNood.value !== value) currentNood = currentNood.nextNood;
    return currentNood;
} 

LinkedList.prototype._startNewList = function (value) {
    this.head = new Nood({value});
    this.tail = this.head;
    this.length = 1;
    return this;
}

LinkedList.prototype._isEmptyList = function () {
    return this.head === null;
}

LinkedList.prototype._reassignHead = function (Nood) {
    this.head = Nood;
}

LinkedList.prototype._reassignTail = function (Nood) {
    this.tail = Nood;
}

LinkedList.prototype.clearList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

LinkedList.prototype.count = function () {
    return this.length;
}

const Nood = function (parameters) {
    this.previousNood = parameters.previousNood || null;
    this.value = parameters.value;
    this.nextNood = parameters.nextNood || null;
}

module.exports = LinkedList;
