class Leap {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    if (this.year % 4 === 0) {
      return this.year % 100 === 0 ? this.year % 400 === 0 : true;
    }
    return false;
  }
}

export default Leap;
