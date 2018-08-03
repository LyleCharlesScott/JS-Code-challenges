const LinkedList = function () {
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.push = function (element) {
    if (this.tail == null) {
        this.tail = new Nood({value: element});
        this.head = this.tail;
        return this;
    }
    this.tail.previous = new Nood({value: element, next: this.tail});
    this.tail = this.tail.previous;
    return this.count();
}

LinkedList.prototype.pop = function () {
    let deleted = this.tail;
    this.tail = deleted.next;
    return deleted.value;
}

LinkedList.prototype.unshift = function (element) {
    if (this.head == null) {
        this.head = new Nood({value: element});
        this.tail = this.head;
        return this;
    }
    this.head.next = new Nood({value: element, previous: this.head});
    this.head = this.head.next;
    return this.count();
}

LinkedList.prototype.shift = function () {
    let deleted = this.head;
    this.head = deleted.previous;
    return deleted.value;
}

LinkedList.prototype.delete = function (value) {
    let deleted = this._identifyNoodByValue(value);
    if (deleted !== this.head && deleted !== this.tail) {
        let nextNood = deleted.next;
        let previousNood = deleted.previous;
        nextNood.previous = deleted.previous;
        previousNood.next = deleted.next;
        return this.count();
    }
    if (deleted == this.head && deleted == this.tail) {
        this.head = null;
        this.tail = null;
        return this.count();
    }
    if (deleted == this.head) deleted.previous = null;
    if (deleted == this.tail) deleted.next = null;
    return this.count();
}

LinkedList.prototype._identifyNoodByValue = function (value) {
    let currentNood = this.head || null;
    while (currentNood.value !== value) {
        currentNood = currentNood.previous;
    }
    return currentNood;
} 

LinkedList.prototype.count = function () {
    let count = 0;
    if (this.head !== null) {
        count ++;
        let currentNood = this.head;
        while (currentNood.previous !== null) {
            count ++;
            currentNood = currentNood.previous;
        } 
    }
    return count;
}

const Nood = function (parameters) {
    this.previous = parameters.previous || null;
    this.value = parameters.value;
    this.next = parameters.next || null;
}

module.exports = LinkedList;
