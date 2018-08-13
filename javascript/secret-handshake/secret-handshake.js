const dictionary = {
  '1': 'wink',
  '2': 'double blink',
  '4': 'close your eyes',
  '8': 'jump',
  '16': 'reverse',
};

const SecretHandshake = function(number) {
  this.number = number;
  this.errorcheck();
};

SecretHandshake.prototype.errorcheck = function() {
  if (/[^0-9]/g.test(this.number)) throw new Error('Handshake must be a number');
  if (this.number > 31) throw new Error('I just can\'t even anymore sometimes.');
};

SecretHandshake.prototype.commands = function () {
  let handshake = [];
  for (let i = 4; i >= 0; i -= 1) {
    let binaryDigit = 2 ** i;
    if (this.number - binaryDigit >= 0) {
      handshake.unshift(dictionary[binaryDigit]);
      this.number -= binaryDigit;
    }
  }
  return handshake.slice(-1)[0] === 'reverse' ? handshake.splice(0, handshake.length - 1).reverse() : handshake;
}

module.exports = SecretHandshake;