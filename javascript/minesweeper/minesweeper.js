const Minesweeper = function () {

}

Minesweeper.prototype.annotate = function (grid = ['']) {
    this.grid = grid;
    this.width = grid[0].length;
    this.height = grid.length;
    console.log(grid);
    this._countLocalMines({row: 5, column: 5});
}

Minesweeper.prototype._iterateThroughSquares = function () {
    this.populatedGrid = this.grid;
    for (let row = 0; row < this.height; row ++) {
        for (let column = 0; column < this.width; column ++) {

        }
    }
}

Minesweeper.prototype._countLocalMines = function (coordinate) {
    let mines = 0;
    for (let row = coordinate.row - 1; row <= coordinate.row + 1; row ++) {
        if (row < 0 || row > this.width) continue;
        for (let column = coordinate.column -1; column <= coordinate.column + 1; column ++) {
            if (column < 0 || column > this.height || 
                (row === coordinate.row && column === coordinate.column)) continue;
            if (this.grid[row][column] === '*') mines ++;
            console.log(coordinate, row,column);
        }
    }
    console.log(mines);
    return mines;
}

module.exports = Minesweeper;