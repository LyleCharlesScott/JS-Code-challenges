let Queens = function (positioning = {white: [0,3], black: [7,3]}) {
    this.white = positioning.white;
    this.black = positioning.black;
    this.checkForError();
};

Queens.prototype.toString = function () {
    let board = [];
    for (let i = 0; i < 8; i++) {
      board.push(Array.from('________'));
    }
    board[this.white[0]][this.white[1]] = "W";
    board[this.black[0]][this.black[1]] = "B";
    board = board.map(row => {
        return row.join(' ');
    }).join('\n') + '\n';
    return board;
};

Queens.prototype.canAttack = function () {
    return this.canAttackHorizontally() || 
        this.canAttackVertically() || this.canAttackDiagonally();
};

Queens.prototype.canAttackHorizontally = function () {
    return this.white[0] === this.black[0];
};

Queens.prototype.canAttackVertically = function () {
    return this.white[1] === this.black[1];
};

Queens.prototype.canAttackDiagonally = function () {
    let horizontalDistance = Math.abs(this.white[0] - this.black[0]);
    let verticalDistance = Math.abs(this.white[1] - this.black[1]);
    return horizontalDistance === verticalDistance;
};

Queens.prototype.checkForError = function() {
    if (this.white === this.black) {
        throw new Error('Queens cannot share the same space');
    }
};

module.exports = Queens;
