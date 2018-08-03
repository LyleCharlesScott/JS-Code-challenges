const ETL = function () {}

ETL.prototype.transform = function (oldDataset) {
    return Object.keys(oldDataset).reduce((newDataset, score) => {
        oldDataset[score].forEach(tile => {
            newDataset[tile.toLowerCase()] = parseInt(score, 10);
        });
        return newDataset;
    }, {});
};

module.exports = ETL;