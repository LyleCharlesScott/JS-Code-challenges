class Isogram {
  constructor(words = '') {
    this.words = words;
  }

  isIsogram() {
    const processedwords = this.words.toLowerCase().replace(/[- ]/g, '');
    let i = 0;
    while (i < processedwords.length) {
      if (processedwords.indexOf(processedwords[i], i + 1) !== -1) return false;
      i += 1;
    }
    return true;
  }
}

export default Isogram;
