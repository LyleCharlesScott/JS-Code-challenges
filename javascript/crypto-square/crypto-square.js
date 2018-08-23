class Crypto {
  constructor(text) {
    this.text = text;
  }

  normalizePlaintext() {
    if (this.normalizedText === undefined) this.normalizedText = this.text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return this.normalizedText;
  }

  size() {
    if (this.numberOfColumns === undefined) {
      this.numberOfColumns = Math.ceil(Math.sqrt(this.normalizePlaintext().length));
    }
    return this.numberOfColumns;
  }

  plaintextSegments() {
    if (this.textSegments === undefined) {
      const textSplitter = new RegExp(`.{1,${this.size()}}`, 'g');
      this.textSegments = this.normalizePlaintext().match(textSplitter);
    }
    return this.textSegments;
  }

  ciphertext() {
    if (this.encodedtext === undefined) {
      this.encodedtext = '';
      for (let columnNumber = 0; columnNumber < this.size(); columnNumber += 1) {
        this.plaintextSegments().forEach((segment) => {
          if (segment[columnNumber] !== undefined) this.encodedtext += segment[columnNumber];
        });
      }
    }
    return this.encodedtext;
  }
}

export default Crypto;
