let tileValues = [
  { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1 },
  { D: 2, G: 2 },
  { B: 3, C: 3, M: 3, P: 3 },
  { F: 4, H: 4, V: 4, W: 4, Y: 4 },
  { K: 5 },
  { J: 8, X: 8 },
  { Q: 10, Z: 10 },
];

tileValues = Object.assign(...tileValues);

const cleanInput = (word) => {
  if (typeof word !== 'string') throw new Error();
  const cleanedWord = word.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (cleanedWord.match(/[0-9]$|[0-9]{2,}/g) !== null) throw new Error();
  return cleanedWord;
};

const scrabbleScore = (word = '', scoreMultiplier = 1, additionalScoreMultiplier = null) => {
  const totalMultiplier = scoreMultiplier + additionalScoreMultiplier >= 1 ?
    scoreMultiplier + additionalScoreMultiplier : 1;
  const cleanedWord = cleanInput(word);

  return [...cleanedWord].reduce((score, tile, index, wordArray) => {
    // If a number is found in the word, it multiplies the next letter
    if (tile.match(/[0-9]/g)) {
      const nextTile = tileValues[wordArray[index + 1]];
      const bonusPoints = nextTile * (tile - 1);
      return score + bonusPoints;
    }
    return score + tileValues[tile];
  }, 0) * (totalMultiplier);
};

export default scrabbleScore;
