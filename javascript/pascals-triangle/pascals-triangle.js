const PascalsTriangle = function (numberOfRows) {
    this.rows = [[1]];
    for (let i = 1; i <= numberOfRows - 1; i ++) {
        let previousRow = this.rows[i - 1];
        this.rows.push(getNextRow(previousRow));
    }
    this.lastRow = this.rows[this.rows.length - 1];
};

const getNextRow = function (previousRow) {
    return previousRow.reduce((newRow, firstNumber, index) => {
        let secondNumber = previousRow[+index + 1] !== undefined ? previousRow[+index + 1] : 0;
        newRow.push(firstNumber + secondNumber);
        return newRow;
    }, [1]);
}

module.exports = PascalsTriangle;