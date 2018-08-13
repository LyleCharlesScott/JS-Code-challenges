const transform = (oldDataset) => {
  const newDataset = {};
  Object.keys(oldDataset).forEach((score) => {
    oldDataset[score].forEach((tile) => {
      newDataset[tile.toLowerCase()] = parseInt(score, 10);
    });
  });
  return newDataset;
};

export default transform;
