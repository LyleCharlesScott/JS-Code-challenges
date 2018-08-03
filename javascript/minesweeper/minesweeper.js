const Minesweeper = function () {}

Minesweeper.prototype.annotate = function (grid = ['']) {
    this.grid = grid;
    return findAndCatalogMines(this.grid);
}

module.exports = Minesweeper;

const findAndCatalogMines = function (grid) {
    workingGrid = buildWorkingGrid(grid);
    grid.forEach((row, rowIndex) => {
        row.split('').forEach((square, columnIndex) => {
            if (square === "*") catalogMine(workingGrid, rowIndex, columnIndex);
        })
    })
    return finalizeWorkingGrid(workingGrid);
}

const buildWorkingGrid = function (grid) {
    return grid.reduce((workingGrid, row) => {
        workingGrid.push(row.split(''));
        return workingGrid;
    }, []);
}

const catalogMine = function (workingGrid, rowIndex, columnIndex) {
    for (let row = rowIndex - 1; row <= rowIndex + 1; row ++) {
        if (workingGrid[row] === undefined) continue;
        for (let column = columnIndex - 1; column <= columnIndex + 1; column ++) {
            let thisSquare = workingGrid[row][column];
            if (thisSquare === undefined || thisSquare === "*" || (row === rowIndex && column === columnIndex)) continue;
            if (thisSquare === ' ') {
                thisSquare = 1;
            } else {
                thisSquare ++;
            }
            workingGrid[row][column] = thisSquare;
        }
    }
    return workingGrid;
}

const finalizeWorkingGrid = function (workingGrid) {
    return workingGrid.reduce((finalizedGrid, row) => {
        finalizedGrid.push(row.join(''));
        return finalizedGrid;
    }, [])
}
