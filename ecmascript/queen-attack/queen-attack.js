class Queens {
  constructor(positioning = { white: [0, 3], black: [7, 3] }) {
    this.white = positioning.white;
    this.black = positioning.black;
    this.whiteQueen = { rank: positioning.white[0], file: positioning.white[1] };
    this.blackQueen = { rank: positioning.black[0], file: positioning.black[1] };
    this.checkForError();
  }

  toString() {
    const board = [];
    for (let i = 0; i < 8; i += 1) {
      board.push(Array.from('________'));
    }
    board[this.whiteQueen.rank][this.whiteQueen.file] = 'W';
    board[this.blackQueen.rank][this.blackQueen.file] = 'B';
    return `${board.map(rank => rank.join(' ')).join('\n')}\n`;
  }

  canAttack() {
    return this.canAttackRank() ||
      this.canAttackFile() || this.canAttackDiagonal();
  }

  canAttackRank() {
    return this.whiteQueen.rank === this.blackQueen.rank;
  }

  canAttackFile() {
    return this.whiteQueen.file === this.blackQueen.file;
  }

  canAttackDiagonal() {
    const horizontalDistance = Math.abs(this.whiteQueen.rank - this.blackQueen.rank);
    const verticalDistance = Math.abs(this.whiteQueen.file - this.blackQueen.file);
    return horizontalDistance === verticalDistance;
  }

  checkForError() {
    if (this.whiteQueen.rank === this.blackQueen.rank &&
    this.whiteQueen.file === this.blackQueen.file) {
      throw new Error('Queens cannot share the same space');
    }
  }
}

export default Queens;
