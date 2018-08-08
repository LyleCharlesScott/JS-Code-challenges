const buildWorkingGrid = grid =>
  grid.reduce((workingGrid, row) => {
    workingGrid.push(row.split(''));
    return workingGrid;
  }, []);

const updateGrid = (workingGrid, rowIndex, columnIndex) => {
  const updatedGrid = workingGrid;
  for (let row = rowIndex - 1; row <= rowIndex + 1; row += 1) {
    if (updatedGrid[row] !== undefined) {
      for (let column = columnIndex - 1; column <= columnIndex + 1; column += 1) {
        let thisSquare = updatedGrid[row][column];
        if (thisSquare !== undefined && thisSquare !== '*' && !(row === rowIndex && column === columnIndex)) {
          thisSquare = thisSquare === ' ' ? 1 : thisSquare += 1;
          updatedGrid[row][column] = thisSquare;
        }
      }
    }
  }
  return updatedGrid;
};

const reassembleGrid = workingGrid =>
  workingGrid.reduce((finalizedGrid, row) => {
    finalizedGrid.push(row.join(''));
    return finalizedGrid;
  }, []);

class Minesweeper {
  annotate(grid = []) {
    this.grid = grid;
    workingGrid = buildWorkingGrid(this.grid);
    workingGrid.forEach((row, rowIndex) =>
      row.forEach((square, columnIndex) => {
        if (square === '*') updateGrid(workingGrid, rowIndex, columnIndex);
      }));
    return reassembleGrid(workingGrid);
  }
}

module.exports = Minesweeper;
