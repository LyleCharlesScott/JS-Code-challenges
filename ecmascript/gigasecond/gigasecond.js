const aTrillionMilliseconds = 1e12;

class Gigasecond {
  constructor(birthday) {
    this.birthday = birthday;
  }

  date() {
    return new Date(Number(this.birthday) + aTrillionMilliseconds);
  }
}

export default Gigasecond;
