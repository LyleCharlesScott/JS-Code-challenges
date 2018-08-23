class PhoneNumber {
  constructor(unformattedPhoneNumber) {
    this.unformatted = unformattedPhoneNumber;
    this.formatted = this.unformatted.replace(/^1|\+1|\+|\(|\)| |-|\./g, '');
  }

  number() {
    return /^[2-9]\d{2}[2-9]\d{6}$/g.test(this.formatted) ? this.formatted : null;
  }
}

export default PhoneNumber;
