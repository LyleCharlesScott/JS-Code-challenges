class Words {
  count(text) {
    return text.replace(/[\t\n]/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim()
      .toLowerCase()
      .split(' ')
      .reduce((output, word) => {
        const tally = output;
        const withoutQuotes = word.replace(/^'|'$/g, '');
        if (typeof tally[withoutQuotes] !== 'number') tally[withoutQuotes] = 0;
        tally[withoutQuotes] += 1;
        return tally;
      }, {});
  }
}

export default Words;
