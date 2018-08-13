const PascalsTriangle = function(numberOfRows) {
  let _rows = [[1]];
  for (let i = 1; i <= numberOfRows - 1; i ++) {
      let previousRow = _rows[i - 1];
      _rows.push(getNextRow(previousRow));
  }
  let _lastRow = _rows[_rows.length - 1];
  Object.defineProperty(this, 'rows', {
    get: () => [..._rows]
  });
  Object.defineProperty(this, 'lastRow', {
    get: () => [..._lastRow]
  })
};

const getNextRow = function(previousRow) {
  let newRow = [1];
  for (let i = 0; i < previousRow.length; i += 1) {
    let firstNumber = previousRow[i];
    let secondNumber = previousRow[i + 1] !== undefined ? previousRow[i + 1] : 0;
    newRow.push(firstNumber + secondNumber);
  }
  return newRow;
}

module.exports = PascalsTriangle;
