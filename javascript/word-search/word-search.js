const compass = {
  E: { row: 0, column: 1 },
  SE: { row: -1, column: 1 },
  S: { row: -1, column: 0 },
  SW: { row: -1, column: -1 },
  W: { row: 0, column: -1 },
  NW: { row: 1, column: -1 },
  N: { row: 1, column: 0 },
  NE: { row: 1, column: 1 },
};

class WordLocation {
  constructor(startLocation, endLocation) {
    this.start = [startLocation.row + 1, startLocation.column + 1];
    this.end = [endLocation.row + 1, endLocation.column + 1];
  }
}

class Coordinate {
  constructor(grid, row, column) {
    this.grid = grid;
    this.set(row, column);
  }

  set(row, column) {
    this.row = row;
    this.column = column;
    this.contents = this.isInsideGrid() ? this.grid[this.row][this.column] : undefined;
  }

  isInsideGrid() {
    return (this.grid[this.row] !== undefined) && (this.grid[this.row][this.column] !== undefined);
  }

  move(rowMovement, columnMovement) {
    this.set(this.row + rowMovement, this.column + columnMovement);
  }
}

class Solution {
  constructor(searchTerm, wordLocation) {
    this[searchTerm] = wordLocation;
  }
}

class Wordsearch {
  constructor(grid) {
    this.grid = grid;
  }

  findMatchesAtCoordinate(searchTerm, rowIndex, columnIndex) {
    return Object.keys(compass).reduce((allCoordinateMatches, direction) => {
      const newCoordinateMatches = [];
      const startLocation = new Coordinate(this.grid, rowIndex, columnIndex);
      const currentLocation = new Coordinate(this.grid, rowIndex, columnIndex);
      let currentLetterIndex = 1;
      let mismatchFound = false;

      while (currentLetterIndex < searchTerm.length && mismatchFound === false) {
        const currentLetter = searchTerm[currentLetterIndex];
        currentLocation.move(compass[direction].row, compass[direction].column);
        if (currentLocation.contents !== currentLetter) mismatchFound = true;
        currentLetterIndex += 1;
      }

      if (mismatchFound === false) {
        const endLocation = currentLocation;
        newCoordinateMatches.push(new WordLocation(startLocation, endLocation));
      }

      return allCoordinateMatches.concat(newCoordinateMatches);
    }, []);
  }

  findAllMatches(searchTerm) {
    return this.grid.reduce((allMatches, row, rowIndex) => {
      let rowMatches = [];
      let columnIndex = 0;

      while (columnIndex !== -1) {
        columnIndex = row.indexOf(searchTerm[0], columnIndex);
        if (columnIndex !== -1) {
          const coordinateMatches = this.findMatchesAtCoordinate(searchTerm, rowIndex, columnIndex);
          rowMatches = rowMatches.concat(coordinateMatches);
          columnIndex += 1;
        }
      }

      return allMatches.concat(rowMatches);
    }, []);
  }

  find(searchTerms) {
    return searchTerms.reduce((findings, searchTerm) => {
      const searchTermLocations = this.findAllMatches(searchTerm);
      const searchTermFirstLocation = searchTermLocations[0];
      return Object.assign(findings, new Solution(searchTerm, searchTermFirstLocation));
    }, {});
  }
}

export default Wordsearch;
