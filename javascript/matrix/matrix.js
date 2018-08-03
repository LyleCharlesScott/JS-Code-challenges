const Matrix = function (data) {
    this.rows = this.getRows(data);
    this.columns = this.getColumns();
};

Matrix.prototype.getRows = function (data) {
     return data.split('\n')
        .map(series => series.split(' ')
            .map(element => parseInt(element, 10))
        );
}

Matrix.prototype.getColumns = function () {
    return this.rows.reduce((columns, row, columnIndex) => {
        row.forEach((element, elementIndex) => {
            if (columnIndex !== 0) {
                columns[elementIndex].push(element);
            } else {
                columns.push([element]);
            }
        });
        return columns;
    }, [])
}

module.exports = Matrix;
