const alphabet = 'zqjxkvbywgpfmucdlhrsnioate';

class Pangram {
  constructor(message) {
    this.message = message;
  }

  isPangram() {
    let lowercaseMessage = this.message.toLowerCase();
    if (lowercaseMessage.length < alphabet.length) return false;
    for (const letter of alphabet) {
      if (!lowercaseMessage.includes(letter)) return false;
    }
    return true;
  }
}

export default Pangram;
